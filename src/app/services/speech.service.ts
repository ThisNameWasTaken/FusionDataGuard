import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  recognition;

  constructor() {
    const SpeechRecognition =
      // @ts-ignore
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();

    document.body.addEventListener('click', () => {
      this.recognition.start();
    });

    this.recognition.onresult = event => {
      console.log();
      const message: string = event.results[0][0].transcript;
      console.log(message);

      if (message.toLowerCase().includes('market data')) {
        this.read(' USD/CNY Spike Detected on 12th of December 2019');
      }
    };
  }

  readNotifications() {}

  read(message) {
    const speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    speech.addEventListener('end', () => {
      console.log('speech ended');
    });
  }
}
