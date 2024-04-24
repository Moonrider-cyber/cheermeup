"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Card, CircularProgress, TextField } from "@mui/material";
import { toast } from "react-toastify";
import getStripe from "@/utils/get-stripe";

export default function Pricing() {
  const [price, setPrice] = React.useState(50);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSendMoney() {
    if (name == "" || message == "") {
      toast.error("Please fill in all the fields.");
      return;
    }
    setSubmitting(true);

    const data = {
      amount: price,
      name,
      message,
    };

    const response = await fetch("/api/send-money", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status != 200) {
      setSubmitting(false);
      toast.error("An error occurred while sending money. Please try again.");
      return;
    }

    const stripe = await getStripe();
    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      setSubmitting(false);
      console.log("error", result.error);
    }
  }

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Show Your Cheer🥂
        </Typography>
        <Typography variant="body1" color="text.secondary">
          It&apos;s time to show your love and support.
        </Typography>

        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            p: 5,
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <div
              className={`relative rounded-lg border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-14 h-12 ${
                price == 50 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                50
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={50}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
                disabled={submitting}
              />
            </div>
            <div
              className={`relative rounded-lg border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-14 h-12 ${
                price == 100 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                100
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={100}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
                disabled={submitting}
              />
            </div>
            <div
              className={`relative rounded-lg border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-14 h-12 ${
                price == 500 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                500
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={500}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
                disabled={submitting}
              />
            </div>
            <div
              className={`relative rounded-lg border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-14 h-12 ${
                price == 1000 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                1000
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={1000}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
                disabled={submitting}
              />
            </div>
          </Box>

          <div className="flex flex-col sm:w-9/12 w-full">
            <TextField
              variant="outlined"
              size="medium"
              placeholder="Enter Your Name"
              InputProps={{ sx: { borderRadius: 2 } }}
              className=" mt-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
            />
          </div>

          <TextField
            multiline
            placeholder="Enter Your Message"
            rows={4}
            InputProps={{ sx: { borderRadius: 2 } }}
            className="sm:w-9/12 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={submitting}
          />

          <button
            className={`flex justify-center items-center bg-slate-300 ${
              submitting ? "bg-slate-600" : ""
            }  text-gray-800 px-8 py-3 w-1/2 mt-2 rounded-xl font-bold ${
              !submitting ? "hover:bg-slate-400" : ""
            } transition-colors duration-300 ease-in-out`}
            onClick={handleSendMoney}
            disabled={submitting}
          >
            {submitting ? (
              <CircularProgress className="text-gray-800" size={25} />
            ) : (
              `Support ₹${price}`
            )}
          </button>
        </Card>
      </Box>
      
    </Container>
  );
}
