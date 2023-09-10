import { Component, Input, Output } from '@angular/core';
import { iAssignment } from '../instructor-assignments/iAssignment';
import { InstructorAssignmentsComponent } from '../instructor-assignments/instructor-assignments.component';
import { AssignmentService } from 'src/app/i-assignment.service';

@Component({
  selector: 'app-update-assignment-modal',
  templateUrl: './update-assignment-modal.component.html',
  styleUrls: ['./update-assignment-modal.component.css']
})
export class UpdateAssignmentModalComponent {

  @Input() currentAssignment: any;
  

  constructor(private instAssn : InstructorAssignmentsComponent, private iAssignment: AssignmentService ){}

  updateAssignment() {
    // Validate and save the updated assignment data
    console.log(this.currentAssignment.id)
      this.instAssn.updateAssignment(this.currentAssignment,this.currentAssignment.id)
  }

  closeModal() {
    // Emit an event to notify the parent component to close the modal
    this.instAssn.closeUpdateAssignmentModal()
  }
}
