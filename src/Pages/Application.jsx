import { Container } from "@mui/material";
import Jobs from "../components/Jobs";
import Filters from "../components/Filters";

export default function Application() {
  return (
    <>
      <Container
        sx={{
          marginBottom: "2rem",
          padding: "0.5rem",
          width: "full",
          position: "sticky",
          top: "0",
          zIndex: "1000",
          backgroundColor: "white",
        }}
      >
        <Filters />
      </Container>

      <Jobs />
    </>
  );
}
