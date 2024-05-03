import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
  CardHeader,
  Avatar,
  colors,
} from "@mui/material";

export default function JobCard() {
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          elevation={2}
          sx={{
            "&:hover": {
              transform: "scale(1.02)",
            },
            borderRadius: "1.25rem",
            transition: "transform 0.3s ease",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderRadius: "1.25rem",
            }}
          >
            <CardHeader
              sx={{ marginBottom: "-1.5rem" }}
              avatar={
                <Avatar>
                  <img
                    src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png" //Default Image Source
                    alt="logo"
                    style={{ width: "45px", height: "45px" }}
                  />
                </Avatar>
              }
              title={
                <Typography
                  variant=""
                  sx={{ fontWeight: "600", color: "gray" }}
                >
                  Company's Name
                </Typography>
              }
              subheader={
                <>
                  <Typography variant="subtitle2">
                    Job Role
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: "600" }}>
                    Location
                  </Typography>
                </>
              }
            />

            <CardContent>
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, color: "gray" }}
              >
                Estimated Salary: ₹10 - 14 LPA
              </Typography>

              <Typography
                variant="body1"
                sx={{ marginBottom: 1, fontWeight: "600" }}
              >
                About Company:
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  height: "13rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maskImage: "linear-gradient(#000,rgba(0,0,0,0))",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus sint praesentium obcaecati sequi, dignissimos 
                hic ab ad debitis optio. Fuga accusamus harum veniam voluptatem cup
                iditate consectetur vitae dolorum iste perspiciatis perferendis delectus, eum aperiam sunt excepturi officiis iusto non id!
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "100%",
                  marginTop: "-3rem",
                }}
              >
                <Button variant="text" color="primary" size="small" sx={{}}>
                  View Job
                </Button>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  marginTop: 2,
                  fontWeight: "600",
                  color: colors.grey[500],
                }}
              >
                Minimum Experience
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                1 years
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}
            >
              <Button
                variant=""
                sx={{
                  width: "95%",
                  marginX: "auto",
                  backgroundColor: "rgb(85, 239, 196)",
                  borderRadius: "0.5rem",
                  color: "rgb(0, 0, 0)",
                  fontWeight: 500,
                  padding: "8px 18px",
                  "&:hover": {
                    backgroundColor: "rgb(85, 239, 196)",
                  },
                }}
              >
                ⚡ Easy Apply
              </Button>
            </Box>
          </Card>
        </Paper>
      </Grid>
    </>
  );
}
