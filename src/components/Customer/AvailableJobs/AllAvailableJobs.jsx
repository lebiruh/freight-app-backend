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

const AllAvailableJobs = ({allJobs, handleJobClick}) => {

  
  const {t} = useTranslation();

  return (
    <List>
      {allJobs?.data?.map((job) => (
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

export default AllAvailableJobs