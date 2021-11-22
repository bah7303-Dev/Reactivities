import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IActivity } from "../../../../app/layout/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

const ActivityDashboard: React.FC<IProps> = (props) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList
          activities={props.activities}
          selectActivity={props.selectActivity}
        />
      </GridColumn>
      <GridColumn width={6}>
        {props.selectedActivity && !props.editMode && (
          <ActivityDetails
            activity={props.selectedActivity}
            setEditMode={props.setEditMode}
            setSelectedActivity={props.setSelectedActivity}
          />
        )}
        {props.editMode && (
          <ActivityForm
            setEditMode={props.setEditMode}
            activity={props.selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
