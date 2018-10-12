import { Component } from "../../../node_modules/@angular/core";
import { EmailService } from "../service/emailService/emailService";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    constructor(public emailService: EmailService) {

    }

    onSumbmit(f) {
        this.emailService.sendEmail();
    }
}