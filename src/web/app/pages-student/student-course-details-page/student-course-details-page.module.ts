import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { StudentCourseDetailsPageComponent } from './student-course-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentCourseDetailsPageComponent,
  },
];

/**
 * Module for student course details page.
 */
@NgModule({
  declarations: [
    StudentCourseDetailsPageComponent,
  ],
  exports: [
    StudentCourseDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TeammatesCommonModule,
  ],
})
export class StudentCourseDetailsPageModule { }
