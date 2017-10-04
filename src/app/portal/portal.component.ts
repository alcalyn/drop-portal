import { Component, OnInit } from '@angular/core';
declare var ab: any;

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html'
})
export class PortalComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor() { }

  ngOnInit() {
  }

  onChartClick(event) {
    console.log(event);

    ab.connect(
        'ws://0.0.0.0:8482',
        function (session) {
            console.log('connected to websocket server.');

            session.subscribe('race', function (topic, event) {
                console.log('race updated', topic, event);
            });

            session.subscribe('player-error', function (topic, event) {
                console.log('someone could made a mistake', topic, event);
            });
        },
        function (code, reason, detail) {
            console.warn(code, reason, detail);
        }
    );
  }

}
