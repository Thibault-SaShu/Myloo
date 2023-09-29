import {Publisher, Subjects, UserCreatedEvent} from "@myloo/commun";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
    readonly subject = Subjects.UserCreated;
}