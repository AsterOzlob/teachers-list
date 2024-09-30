import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KSUstaffService } from '../ksustaff.service';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit {
  staff: any;

  constructor(
    private route: ActivatedRoute,
    private staffService: KSUstaffService
  ) {}

  ngOnInit(): void {
    const staffId = +this.route.snapshot.paramMap.get('id')!;
    this.staff = this.staffService.getStaffById(staffId);
  }
}
