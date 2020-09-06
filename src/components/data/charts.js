export const avgGradesOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "CST Co-op Admission (Jan 2018 Intake)",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#f8f9fa',
				'#f2f3f4',
				'#e9ecef',
				'#dadedf',
				'#dee2e6',
				'#ced4da',
				'#adb5bd',
				'#a7afb2',
				'#8c979a',
				'#6c757d',
				'#405057',
				'#495057',
				'#343a40',
				'#282828',
				'#181818',
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "85",
				y: 1
			}, {
				name: "87",
				y: 2
			}, {
				name: "87.4",
				y: 1
			}, {
				name: "89",
				y: 2
			}, {
				name: "89.2",
				y: 1
			}, {
				name: "90",
				y: 2
			}, {
				name: "90.2",
				y: 1
			}, {
				name: "90.5",
				y: 2
			}, {
				name: "91",
				y: 1
			}, {
				name: "92",
				y: 2
			}, {
				name: "93",
				y: 6
			}, {
				name: "93.7",
				y: 1
			}, {
				name: "94",
				y: 1
			}, {
				name: "94.5",
				y: 1
			}, {
				name: "96",
				y: 1
			}],
  }],
};

export const commOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "COMM 1116 - Business Communications",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#e01e37',
				'#f01e37',
				'#da1e37',
				'#c71f37',
				'#bd1f36',
				'#b21e35',
				'#a71e34',
				'#a11d33', 
				'#85182a', 
				'#6e1423'
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "77",
				y: 1,
			}, {
				name: "78",
				y: 1
			}, {
				name: "83",
				y: 2
			}, {
				name: "84",
				y: 1
			}, {
				name: "85",
				y: 2
			}, {
				name: "86",
				y: 2
			}, {
				name: "87",
				y: 2
			}, {
				name: "92",
				y: 2
			}, {
				name: "93",
				y: 1
			}, {
				name: "96",
				y: 1
			}
			]
  }],
};


export const essentialsOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "COMM 1111 - Essentials",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#ffc600',
				'#ffaa00',
				'#ff9100', 
				'#ff7900', 
				'#ff6000', 
				'#ff4800', 
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "94",
				y: 2,
			}, {
				name: "95",
				y: 1
			}, {
				name: "96",
				y: 2
			}, {
				name: "97",
				y: 8
			}, {
				name: "98",
				y: 2
			}, {
				name: "99",
				y: 1
			}]
  }],
};


export const javaOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "COMP 1510 - Java",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#fff77e',
				'#fff056',
				'#ffe246', 
				'#ffd53e', 
				'#fdc43f', 
				'#fdb833', 
				'#fda853'
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "89",
				y: 1,
			}, {
				name: "90",
				y: 2
			}, {
				name: "91",
				y: 4
			}, {
				name: "92",
				y: 3
			}, {
				name: "93",
				y: 3
			}, {
				name: "95",
				y: 2
			}, {
				name: "97",
				y: 1
			}]
  }],
};



export const mathOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "COMP 1113 - Math",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#daf2da',
				'#b8e6b8',
				'#98d998',
				'#7acc7a',
				'#60bf60',
				'#47b347',
				'#32a632', 
				'#1f991f', 
				'#118c11', 
				'#008000'
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "77",
				y: 1,
			}, {
				name: "78",
				y: 1
			}, {
				name: "83",
				y: 2
			}, {
				name: "84",
				y: 8
			}, {
				name: "85",
				y: 2
			}, {
				name: "86",
				y: 1
			}, {
				name: "87",
				y: 2
			}, {
				name: "92",
				y: 2
			}, {
				name: "93",
				y: 2
			}, {
				name: "96",
				y: 1
			}
			]
  }],
};

export const busaOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "BUSA 2720 - Business in a Networked Economy",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#caf0f8',
				'#ade8f4',
				'#90e0ef',
				'#48cae4',
				'#00b4d8',
				'#0096c7', 
				'#0077b6', 
				'#023e8a', 
				'#03045e'
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "76",
				y: 1,
			}, {
				name: "79",
				y: 1
			}, {
				name: "80",
				y: 1
			}, {
				name: "81",
				y: 1
			}, {
				name: "82",
				y: 2
			}, {
				name: "83",
				y: 2
			}, {
				name: "86",
				y: 3
			}, {
				name: "88",
				y: 1
			}, {
				name: "93",
				y: 1
			}
			]
  }],
};

export const webOptions = {
  chart: {
		type: "column",
		spacing: [70, 40, 70, 40],
		height: "600"
	},
	colorAxis: {},
  title: {
    text: "COMP 1536 - Web Development",
  },
  xAxis: {
		visible: false,
    labels: {
      type: "category",
      style: {
        fontSize: "1em",
        fontFamily: "Verdana, sans-serif",
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "No. of Students",
    },
  },
  plotOptions: {
    column: {
			colors: [
				'#e0bbff',
				'#c77dff',
				'#9d4edd',
				'#7b2cbf',
				'#5a189a',
				'#3c096c', 
				'#240046', 
				'#10002b'
			],
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>'
        // format: '<b>Grade: {point.name}%</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
			colorByPoint: true,
			showInLegend: false,
			data: [{
				name: "90",
				y: 2,
			}, {
				name: "92",
				y: 1
			}, {
				name: "93",
				y: 2
			}, {
				name: "94",
				y: 2
			}, {
				name: "95",
				y: 3
			}, {
				name: "96",
				y: 4
			}, {
				name: "97",
				y: 1
			}]
  }],
};
