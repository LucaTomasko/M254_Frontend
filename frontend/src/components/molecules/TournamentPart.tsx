import { Alert, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function TournamentPart() {
  const [open, setOpen] = React.useState(true);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                Tournament
            </Typography>
            <Typography variant="h5" component="div">
              Date: 20-20-2020
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Volleyball
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up</Button>
            <Button size="small">Info</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                Tournament
            </Typography>
            <Typography variant="h5" component="div">
              Date: 20-20-2020
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Basketball
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up</Button>
            <Button size="small">Info</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TournamentPart