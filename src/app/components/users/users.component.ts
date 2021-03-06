import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	user: User = {
		firstName: '',
		lastName: '',
		email: ''
	};
	users: User[];
	showExtended: boolean = true;
	loaded: boolean = false;
	enableAdd: boolean = false;
	showUserForm: boolean = false;
	@ViewChild('userForm', { static: true })
	form: any;
	data: any;

	constructor(private dataService: UserService) {}

	ngOnInit() {
		this.dataService.getData().subscribe((data) => {
			console.log(data);
		});
		this.dataService.getUsers().subscribe((users) => {
			this.users = users;
			this.loaded = true;
		});
	}

	onSubmit({ value, valid }: { value: User; valid: boolean }) {
		if (!valid) {
			console.log('Form is not valid');
		} else {
			value.isActive = true;
			value.registered = new Date();
			value.hide = true;
			this.dataService.addUser(value);
			if (this.showUserForm && this.form) {
				this.form.reset();
			}
		}
	}
}
