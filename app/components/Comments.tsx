"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { GetHomeTransactions } from "../actions";
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
} from "@mui/material";

import Link from 'next/link';

interface UserMessages {
  name: string;
  message: string;
  amount: number;
}

export default function Comments() {
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
        pt: { xs: 4, sm: 30 },
        pb: { xs: 4, sm: 10 },
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
          Wall of Cheers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here are all the heroes who have changed my life with their amazing
          hearts.
        </Typography>
      </Box>
      {loading ? (
        <Box className="flex items-center justify-center w-full h-40 gap-4">
          <Card className="flex items-center justify-center w-full h-40">
            <CircularProgress />
          </Card>
          <Card className="flex items-center justify-center w-full h-40">
            <CircularProgress />
          </Card>
          <Card className="flex items-center justify-center w-full h-40">
            <CircularProgress />
          </Card>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {UserMessages.length > 1 &&
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

      <Link href={`/comments`} className="w-full flex justify-center">
        <Button
          variant="outlined"
          color="primary"
          className="w-1/4 rounded-md px-4 py-2 transition duration-300 ease-in-out"
        >
          View all
        </Button>
      </Link>

    </Container>
  );
}
