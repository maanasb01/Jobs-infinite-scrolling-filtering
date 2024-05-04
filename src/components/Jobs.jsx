import { Container, Grid } from "@mui/material";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useRef } from "react";
import {
  fetchJobCardsAsync,
  nextOffset,
} from "../features/jobCards/jobCardsSlice";
import filterCards from "../lib/filterCards";

export default function Jobs() {
  const dispatch = useDispatch();
  const jobCards = useSelector((state) => state.jobCards.jobCards);
  const loading = useSelector((state) => state.jobCards.loading);
  const error = useSelector((state) => state.jobCards.error);
  const offset = useSelector((state) => state.jobCards.offset);
  const hasMoreJobs = useSelector((state) => state.jobCards.hasMoreJobs);
  const selectFilters = useSelector((state) => state.filters.selectFilters);
  const searchFilters = useSelector((state) => state.filters.searchFilters);

  const dataFetchedRef = useRef(false); // To manage calling the initial api once. Due to Stric mode, fetched result was getting concatinated twice.

  useEffect(() => {
    if (!dataFetchedRef.current) {
      dispatch(fetchJobCardsAsync(offset));
      dataFetchedRef.current = true;
    }
  }, [offset]);

  const intObserver = useRef(null); // Intersection Observer to observe the last element
  const lastCardRef = useCallback(
    (node) => {
      if (loading) return;

      if (intObserver.current) {
        // If int. Observer exists of old last element, then remove it
        intObserver.current.disconnect();
      }

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreJobs) {
          dataFetchedRef.current = false;
          dispatch(nextOffset());
        }
      });

      if (node) {
        intObserver.current.observe(node);
      }
    },
    [loading, hasMoreJobs]
  );

  return (
    <>
      <Container sx={{ backgroundColor: "white" }}>
        <Grid container spacing={4}>
          {/* filterCards is the Main Filter Function to Implement all filters. Imported from lib */}
          {jobCards &&
            jobCards
              .filter((job) => filterCards(job, selectFilters, searchFilters))
              .map((job, index) => {
                if (jobCards.length === index + 1) {
                  return (
                    <Grid
                      ref={lastCardRef}
                      item
                      xs={12}
                      md={6}
                      lg={4}
                      key={job.jdUid + index}
                    >
                      <JobCard job={job} />
                    </Grid>
                  );
                }

                return (
                  <Grid item xs={12} md={6} lg={4} key={job.jdUid + index}>
                    <JobCard job={job} />
                  </Grid>
                );
              })}
        </Grid>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </Container>
    </>
  );
}
