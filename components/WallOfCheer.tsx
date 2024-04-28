"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { GetHomeTransactions } from "../app/actions";
import { Avatar, Button, CardContent, CardHeader, Grid } from "@mui/material";

import Link from "next/link";

interface UserMessages {
  name: string;
  message: string;
  amount: number;
}

export default function WallOfCheer() {
  const [UserMessages, setUserMessages] = React.useState<UserMessages[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      const data: any = await GetHomeTransactions();
      setUserMessages(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Container
      id="comments"
      sx={{
        mt: { xs: 10, sm: 30 },
        mb: { xs: 10, sm: 10 },
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
          textAlign: "center",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2.3rem" },
          }}
        >
          Wall of Cheers
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: ".8rem", sm: "1.1rem" },
          }}
        >
          Here are all the heroes who have changed my life with their amazing
          hearts.
        </Typography>
      </Box>
      {loading ? (
        <Box className="grid gap-4 w-full grid-cols-3">
          {Array.from(new Array(3)).map((_, index) => (
            <Card className="w-full h-40 animate-pulse" key={index} />
          ))}
        </Box>
      ) : (
        <Grid container spacing={2}>
          {UserMessages.length > 0 &&
            UserMessages.map((messages, index) => (
              <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                <Card
                  key={index}
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
      <Link href={`/comments`}>
        <Button
          variant="outlined"
          color="primary"
          className="w-full rounded-md px-12 py-2 transition duration-300 ease-in-out"
        >
          View all
        </Button>
      </Link>
    </Container>
  );
}
