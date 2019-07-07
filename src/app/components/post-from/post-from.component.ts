import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-from.component.html',
	styleUrls: [ './post-from.component.scss' ]
})
export class PostFromComponent implements OnInit {
	@Input() currentPost: Post;
	@Input() isEdit: boolean;

	@Output() newPost: EventEmitter<Post> = new EventEmitter();
	@Output() updatedPost: EventEmitter<Post> = new EventEmitter();

	constructor(private postService: PostService) {}

	ngOnInit() {}

	addPost(title, body) {
		if (!title || !body) {
			alert('Please add post');
		} else {
			this.postService.savePost({ title, body } as Post).subscribe((post) => {
				this.newPost.emit(post);
			});
		}
	}

	updatePost() {
		this.postService.updatePost(this.currentPost).subscribe((post) => {
			console.log(post);
			this.isEdit = false;
			this.updatedPost.emit(post);
		});
	}
}
