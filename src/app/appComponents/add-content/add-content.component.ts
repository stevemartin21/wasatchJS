import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Content} from '../../models/content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  form: FormGroup;
  private  contentId;
  private mode = 'create';
  content: Content;
  optionsSelect: Array<any>;
  optionsSelect2: Array<any>;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.optionsSelect = [
      { value: 'opinion', label: 'Opinion' },
      { value: 'explaination', label: 'Explaination' },
      { value: 'demonstration', label: 'Demonstration' },
      { value: 'analysis', label: 'Analysis' },
      { value: 'other', label: 'Other' },
      ];

      this.optionsSelect2 = [
        { value: 'article', label: 'Article' },
        { value: 'post', label: 'Blog Post' },
        { value: 'video', label: 'Video' },
        { value: 'codeDemo', label: 'Code Demo' },
        { value: 'other', label: 'Other' },

        ];

    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      topic: new FormControl(null, {validators: [Validators.required]}),
      link: new FormControl(null, {validators: [Validators.required]}),
      type: new FormControl(null, {validators: [Validators.required]})
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.contentId = paramMap.get('id');
        this.readDataService.getContent(this.contentId).subscribe(content => {
          this.content = content;
          console.log(content);
          console.log(this.content);

          this.form.setValue({
            title: this.content.title,
            description: this.content.description,
            topic: this.content.topic,
            link: this.content.link,
            type: this.content.type
          });
        });
      } else {
        this.mode = 'create';
        this.contentId = null;
      }
    });
  }

  saveContent() {

    if ( this.form.invalid) {
      return;
    }

    if ( this.mode === 'create') {
      this.createDataService.createContent(
        this.form.value.title,
        this.form.value.description,
        this.form.value.topic,
        this.form.value.link,
        this.form.value.type
      );
    } else {
      this.updateDataService.updateContent(
        this.contentId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.topic,
        this.form.value.link,
        this.form.value.type
      );
    }

    this.router.navigate(['/dashboard']);



  }

}

/*
 _id: String;
  title: String;
  description: String;
  topic: String;
  link: String;


*/
