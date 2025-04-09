import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useTranslation} from "react-i18next"
import { getPendingOrdersBySearch } from '../../../helpers/Orders';
import { useQuery } from '@tanstack/react-query';


const AvailabeJobsBySearch = ({debouncedQuery, handleJobClick}) => {
  
  const {t} = useTranslation();

  // useEffect(() => {
  //     const handler = setTimeout(() => {
  //       setDebouncedQuery(searchQuery);
  
  //     return () => clearTimeout(handler)
  //     }, 300)
  //   },[searchQuery])

  const searchResults = useQuery({queryKey:['searchResults'], 
      queryFn: () => getPendingOrdersBySearch(debouncedQuery), 
      enabled: !!debouncedQuery,
      // staleTime: 1000 * 60 * 5,
      onError: (error) => {
      console.error("Error fetching search results:", error);
      }
    })

  console.log("searchResults on available jobs is: ", searchResults.data);


  if (searchResults?.isLoading) {
      return (
        <div className="container-xxl h- bg-white p-0">
          <div className="w-full h-[90vh] bg-white p-0">
            Loading ...
          </div>
        </div>
      )        
  }

  if (searchResults?.data?.length === 0) {
      return (
        <div className="container-xxl h- bg-white p-0">
          <div className="w-full h-[90vh] bg-white p-0">
            No jobs found.
          </div>
        </div>
      )
  }

  return (
    <List>
      {searchResults?.data?.map((job) => (
        <React.Fragment key={job.freightId}>
          <ListItem
            // button
            onClick={() => handleJobClick(job.freightId)}
            sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }} // Optional hover effect
          >
            <ListItemText
              primary={`${job.start_location} to ${job.end_location}`}
              secondary={`${t("home.load")}: ${job.weight} ${job?.weight_unit}, ${t("home.truck")}: ${job.type}, ${t("home.price")}: ${job.price} ETB/${job?.price_unit}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="details" onClick={() => handleJobClick(job.freightId)}>
                <ArrowForwardIosIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default AvailabeJobsBySearch