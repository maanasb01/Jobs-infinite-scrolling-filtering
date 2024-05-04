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

export default function JobCard({ job }) {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxJdSalary,
    minExp,
    minJdSalary,
  } = job;

  // To render the estimated salary based on the min and max salary props.
  let estimatedSalary = "Estimated Salary: ";

  if (minJdSalary !== null && maxJdSalary !== null) {
    estimatedSalary += `$${minJdSalary}k - ${maxJdSalary}k`;
  } else if (minJdSalary !== null) {
    estimatedSalary = `Minimum Estimated Salary: $${minJdSalary}k`;
  } else if (maxJdSalary !== null) {
    estimatedSalary = `Maximum Estimated Salary: $${maxJdSalary}k`;
  } else {
    estimatedSalary += "Salary not provided";
  }
  return (
    <>
      
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
              height: "30rem",
              position: "relative",
            }}
          >
            <CardHeader
              sx={{ marginBottom: "-1.5rem" }}
              avatar={
                <Avatar>
                  {/* Company's Logo */}
                  <img
                    src={logoUrl}
                    alt="logo"
                    style={{ width: "45px", height: "45px" }}
                  />
                </Avatar>
              }
              title={
                // Company's Name
                <Typography
                  variant=""
                  sx={{ fontWeight: "600", color: "gray" }}
                >
                  {companyName}
                </Typography>
              }
              subheader={
                <>
                  {/* Role and Location */}
                  <Typography variant="subtitle2">{jobRole}</Typography>
                  <Typography variant="caption" sx={{ fontWeight: "600" }}>
                    {location ? location : "Not Disclosed"}
                  </Typography>
                </>
              }
            />

            <CardContent>
              {/* Salary */}
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, color: "gray" }}
              >
                {estimatedSalary}
              </Typography>
              {/* About Company Heading */}
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, fontWeight: "600" }}
              >
                About Company:
              </Typography>

              {/* Company's Description */}
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
                {jobDetailsFromCompany}
              </Typography>

              {/* Container for "View Job" button */}
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

              {/* Minimum Salary Container */}
              <Box>
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
                  {/* Experience */}
                  {minExp ? `${minExp} years` : "Not Mentioned by the Company"}
                </Typography>
              </Box>
            </CardContent>

            {/* Apply Button COntainer */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}
            >
              <Button
                // Clicking the button would redirect to job Link
                href={jdLink}
                target="_blank"
                sx={{
                  width: "95%",
                  marginX: "auto",
                  backgroundColor: "rgb(85, 239, 196)",
                  borderRadius: "0.5rem",
                  color: "rgb(0, 0, 0)",
                  fontWeight: 500,
                  padding: "8px 18px",
                  position: "absolute",
                  bottom: "0.5rem",
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

    </>
  );
}
