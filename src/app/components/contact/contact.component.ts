import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
interface FormData {
  name: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 currentTheme = this.themeService.getCurrentTheme();
  formData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private themeService: ThemeService, private http:HttpClient) {}

// onSubmit() {
//   // Show success immediately (to avoid user waiting)
// this.showSuccessToast();
//   // Trigger backend call silently (no need to subscribe UI)
//   this.http.post('https://thumbnail-backend-g1bn.onrender.com/send-email', this.formData)
//   // this.http.post('http://localhost:3000/send-email', this.formData)
//     .subscribe({
//       next: () => console.log("Email sent in background."),
//       error: () => console.warn("Backend cold start / email not sent yet, retrying might be needed.")
//     });

//   this.formData = { name: '', email: '', message: '' };
// }

onSubmit() {
  this.showSuccessToast();

  const payload = JSON.stringify(this.formData);
  const blob = new Blob([payload], { type: "text/plain" });

  const ok = navigator.sendBeacon(
    "https://thumbnail-backend-g1bn.onrender.com/send-email",
    blob
  );

  console.log("Beacon sent?", ok);

  this.formData = { name: '', email: '', message: '' };
}


showSuccessToast() {
  const toast = document.getElementById("successToast");
  if (!toast) return;

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}


}
