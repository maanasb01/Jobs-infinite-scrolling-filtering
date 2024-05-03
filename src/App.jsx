import { Container, Grid } from '@mui/material'
import './App.css'
import JobCard from './components/JobCard'

function App() {

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
