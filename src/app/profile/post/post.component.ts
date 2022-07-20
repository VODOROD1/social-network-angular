import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "src/app/posts.service";

const postPlug = {
    id: 0,
    text: "some text!",
    description: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
}

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less']
})

export class PostComponent implements OnInit {

    public postDesc: string = ""; 

    constructor(private myPostsService: PostsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        /* eslint-disable-next-line */
        debugger;
        this.route.params.subscribe((params: any) => {
            /* eslint-disable-next-line */
            debugger;
            for(let i = 0; i < this.myPostsService.myPosts.length; i++) {
                if(params.id == this.myPostsService.myPosts[i].id) {
                    this.postDesc = this.myPostsService.myPosts[i].description;
                    /* eslint-disable-next-line */
                    debugger;
                    break;
                } else {
                    this.postDesc = "No text!";
                }
            }
            // this.myPostsService.myPosts.forEach((post) => {
            //     if(params.id == post.id) {
            //         this.postDesc = post.description;
            //         /* eslint-disable-next-line */
            //         debugger;
            //         return;
            //     } else {
            //         this.postDesc = "No text!";
            //     }
            // })
        })
    }
}
