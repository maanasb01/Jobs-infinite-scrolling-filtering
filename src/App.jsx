import { Container, Grid } from "@mui/material";
import "./App.css";
import JobCard from "./components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchJobCardsAsync } from "./features/jobCards/jobCardsSlice";

function App() {
  const dispatch = useDispatch();
  const jobCards = useSelector((state) => state.jobCards.jobCards);

  useEffect(() => {
    dispatch(fetchJobCardsAsync());
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        {jobCards.map(job=><JobCard job={job} key={job.jdUid}/>)}
      </Grid>
    </Container>
  );
}

export default App;
