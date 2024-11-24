import React, { useState } from 'react';
import UpdatedUserJourneyText from '../components/ReviewPage/UpdatedUserJourneyText';
import EditButton from '../components/ReviewPage/EditButton';
import ApproveButton from '../components/ReviewPage/ApproveButton';
import ScreensList from '../components/ReviewPage/ScreensList';
import DownloadFirstDeliverableButton from '../components/ReviewPage/DownloadFirstDeliverableButton';
import DirectoryStructureDescription from '../components/ReviewPage/DirectoryStructureDescription';
import DownloadFinalDeliverableButton from '../components/ReviewPage/DownloadFinalDeliverableButton';
import { Container, Typography, Box, Grid } from '@mui/material';
import NavBar from '../components/shares/NavBar';

type ScreenData = {
  name: string;
  components: string[];
};

const ReviewPage: React.FC = () => {
  const [userJourneyApproved, setUserJourneyApproved] = useState(false);

  const handleApproveClick = () => {
    setUserJourneyApproved(true);
  };

  const screensData: ScreenData[] = [
    {
      name: 'Screen 1',
      components: ['Component 1', 'Component 2'],
    },
    {
      name: 'Screen 2',
      components: ['Component 3', 'Component 4'],
    },
  ];

  const handleEditClick = () => {
    // Handle the edit button click here
  };

  const handleDownloadFirstDeliverable = () => {
    // Handle downloading the first deliverable here
    console.log('Downloading first deliverable...');
  };

  const handleDownloadFinalDeliverable = () => {
    // Handle downloading the first deliverable here
    console.log('Downloading final deliverable...');
  };

  /*
  return (
    <div>
      <UpdatedUserJourneyText text="Updated user journey text goes here" />
      <EditButton onClick={handleEditClick} />
      <ApproveButton onClick={handleApproveClick} />
      {userJourneyApproved && (
        <>
          <ScreensList screens={screensData} />
          <DownloadFirstDeliverableButton onClick={handleDownloadFirstDeliverable} />
          <DirectoryStructureDescription />
          <DownloadFinalDeliverableButton onClick={handleDownloadFinalDeliverable} />
        </>
      )}
    </div>
  );
  */

  return (
    <>
      <NavBar />
      <Container>
            
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
            Review your project
            </Typography>
        </Box>
        <Box mb={4}>
            <Typography variant="body1">Updated user journey:</Typography>
            <UpdatedUserJourneyText text="Updated user journey text goes here" />
        </Box>
        <Grid container spacing={2}>
            <Grid item>
            <EditButton onClick={handleEditClick} />
            </Grid>
            <Grid item>
            <ApproveButton onClick={handleApproveClick} />
            </Grid>
        </Grid>
        {userJourneyApproved && (
            <>
            <Box mt={4}>
                <ScreensList screens={screensData} />
            </Box>
            <Box mt={4}>
                <DownloadFirstDeliverableButton onClick={handleDownloadFirstDeliverable} />
            </Box>
            <Box mt={4}>
                <DirectoryStructureDescription />
            </Box>
            <Box mt={4}>
                <DownloadFinalDeliverableButton onClick={handleDownloadFinalDeliverable} />
            </Box>
            </>
        )}
      </Container>
    </>
  );
};

export default ReviewPage;
