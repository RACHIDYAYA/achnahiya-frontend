import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-materials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-materials.component.html',
  styleUrls: ['./course-materials.component.css']
})
export class CourseMaterialsComponent implements OnInit {
  courseId!: number;
  materials: any[] = [];
  isLoading = true;
  errorMessage = '';

  isModalOpen = false;
  newMaterial = {
    title: '',
    type: 'video',  // 'video' أو 'pdf'
  };
  selectedFile?: File;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadMaterials();
  }

  loadMaterials() {
    this.isLoading = true;
    this.courseService.getMaterials(this.courseId).subscribe({
      next: (response: any) => {
        this.materials = response.data;  // pagination response
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = 'حدث خطأ أثناء تحميل المحتوى.';
        this.isLoading = false;
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
    this.newMaterial = { title: '', type: 'video' };
    this.selectedFile = undefined;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addMaterial() {
    if (!this.newMaterial.title || !this.selectedFile) {
      alert('يرجى ملء العنوان واختيار ملف');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.newMaterial.title);
    formData.append('type', this.newMaterial.type);
    formData.append('file', this.selectedFile);

    this.courseService.uploadMaterial(this.courseId, formData).subscribe({
      next: (res: any) => {
        this.materials.push(res.material);
        alert('تمت إضافة المادة بنجاح!');
        this.closeModal();
      },
      error: () => {
        alert('حدث خطأ أثناء إضافة المادة.');
      }
    });
  }
}
