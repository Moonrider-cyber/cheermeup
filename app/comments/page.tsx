"use client";

import React, { useEffect, useState } from "react";
import { GetTransactions } from "../actions";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface UserMessages {
  name: string;
  message: string;
  amount: number;
}

export default function Page() {

  const [loading, setLoading] = useState<boolean>(true);
  const [UserMessages, setUserMessages] = useState<UserMessages[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: any = await GetTransactions();
      setUserMessages(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Link href={"/"} className="absolute sm:left-32 left-5 md:left-11 cursor-pointer w-7 sm:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="34"
            // height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Link>
        <h1 className="sm:text-5xl text-2xl text-center mt-14 font-bold text-slate-300">
          Wall of Cheers
        </h1>
      </div>
      <Container
        sx={{
          paddingY: { xs: 4, sm: 10 },
        }}
      >
        {loading ? (
          <Box className="grid grid-cols-3 gap-4">
            {Array.from(new Array(6)).map((_, index) => (
              <Card className="flex items-center justify-center w-full h-40 animate-pulse bg-gray-800" key={index} />
            ))}
          </Box>
        ) : (
          <Grid container spacing={2}>
            {UserMessages.length > 0 &&
              UserMessages.map((messages, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flexGrow: 1,
                      p: 1,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {messages.message}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        pr: 2,
                      }}
                    >
                      <CardHeader
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        avatar={
                          <Avatar
                            sx={{
                              fontWeight: "bold",
                              bgcolor: "primary.main",
                            }}
                          >
                            {messages.name[0]}
                          </Avatar>
                        }
                        title={messages.name}
                        subheader={`₹${messages.amount}`}
                      ></CardHeader>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
