import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { SendMoney } from "../actions";

export default function Pricing() {
  const [price, setPrice] = React.useState(1);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [anonymous, setAnonymous] = React.useState(false);

  function handlePriceChange(e: any) {
    if(e.target.value > 1000) return;
    setPrice(e.target.value);
  }

  async function handleSendMoney(){
    // const data = {
    //   amount: price,
    //   name,
    //   message
    // };
    
    // const result = await SendMoney(data);
    
    // const { error } = JSON.parse(result);

    // if(error){
    //   console.log("error", error);
      
    //   alert("An error occurred while sending money. Please try again.");
    //   return;
    // }

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
          It's time to show your love and support.
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
              className={`relative rounded-full border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-12 h-12 ${
                price == 1 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                1
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={1}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
              />
            </div>
            <div
              className={`relative rounded-full border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-12 h-12 ${
                price == 2 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                2
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={2}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
              />
            </div>
            <div
              className={`relative rounded-full border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-12 h-12 ${
                price == 5 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                5
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={5}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
              />
            </div>
            <div
              className={`relative rounded-full border border-solid flex items-center justify-center xs:w-10 xs:h-10 w-12 h-12 ${
                price == 10 && "bg-slate-300 text-black"
              }`}
            >
              <span className="text-lg font-bold xs:font-medium xs:text-sm">
                10
              </span>
              <input
                type="radio"
                className="absolute opacity-0 w-full h-full left-0 top-0 cursor-pointer"
                value={10}
                onChange={(e) => setPrice(Number(e.target.value))}
                name="price"
              />
            </div>

            <input
              typeof="number"
              className="w-12 h-12 text-center rounded-xl bg-[#1e1e1e] text-white border"
              type="number"
              value={price}
              onChange={handlePriceChange}
            />
          </Box>

          <div className="flex flex-col w-9/12">
            <TextField
              variant="outlined"
              size="medium"
              placeholder="Enter Your Name"
              InputProps={{ sx: { borderRadius: 2 } }}
              className=" mt-5"
              disabled={anonymous}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex mt-1 ml-1">
              <FormControlLabel
                control={<Checkbox />}
                label="Make it anonymous"
                className="select-none"
                checked={anonymous}
                onChange={(e: any) => setAnonymous(e.target.checked)}
              />
            </div>
          </div>

          <TextField
            multiline
            placeholder="Enter Your Message"
            rows={4}
            InputProps={{ sx: { borderRadius: 2 } }}
            className="w-9/12"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button 
            className="bg-slate-300 text-gray-800 px-8 py-3 w-1/2 mt-2 rounded-xl font-bold hover:bg-slate-400 transition-colors duration-300 ease-in-out"
            onClick={handleSendMoney}
          >
            Support ${price > 0 ? price : 1}
          </button>
        </Card>
      </Box>
    </Container>
  );
}
