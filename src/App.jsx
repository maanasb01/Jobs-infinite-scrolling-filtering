import { Container, Grid } from '@mui/material'
import './App.css'
import JobCard from './components/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchJobCardsAsync } from './features/jobCards/jobCardsSlice';

function App() {
  const dispatch = useDispatch();
  const jobCards = useSelector((state) => state.jobCards.jobCards);

  useEffect(() => {
    dispatch(fetchJobCardsAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log(jobCards);
  }, [jobCards]);

  return (
    <Container>
      <Grid container spacing={4}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </Grid>
    </Container>
  )
}

export default App
