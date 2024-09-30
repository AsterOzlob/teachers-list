import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KSUstaffService } from '../ksustaff.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, FilterPipe],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit {
  staffList: any[] = [];
  searchText: string = '';

  constructor(private staffService: KSUstaffService) {}

  ngOnInit(): void {
    this.staffList = this.staffService.getStaffList();
  }
}
