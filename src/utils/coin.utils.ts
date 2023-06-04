// Функции рассчета статистики
export const Utils = {
	countMean(action: number[]) {
		let sum: number = 0
		for (let item of action) {
			sum += item
		}
		return (sum / action.length)
	},
	countVariance(action: number[]) {
		const n = action.length;
		const mean = action.reduce((acc, val) => acc + val, 0) / n;
		const deviations = action.map(val => val - mean);
		const squaredDeviations = deviations.map(val => val ** 2);
		const variance = squaredDeviations.reduce((acc, val) => acc + val, 0) / n;
		return variance
	},
	findMinMax(action: number[]) {
		let min = action[0];
		let max = action[0];

		for (let i = 1; i < action.length; i++) {
			if (action[i] < min) {
				min = action[i];
			}
			if (action[i] > max) {
				max = action[i];
			}
		}
		return [min, max]
	},
	countMedian(action: number[]) {
		if (action.length === 0) {
			return 0;
		}
		// Сортируем массив чисел в порядке возрастания
		const sortedNumbers = action.slice().sort((a, b) => a - b);
		const middleIndex = Math.floor(sortedNumbers.length / 2);
		if (sortedNumbers.length % 2 === 0) {
			// Если количество элементов в массиве четное, возвращаем среднее значение двух средних элементов
			return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
		} else {
			// Если количество элементов в массиве нечетное, возвращаем средний элемент
			return sortedNumbers[middleIndex];
		}
	},
	exponentialSmoothing(data: number[], alpha: number) {
		let smoothedData = [data[0]]; // Первое значение остается без изменений
		for (let i = 1; i < data.length; i++) {
			let smoothedValue = alpha * data[i] + (1 - alpha) * smoothedData[i - 1];
			smoothedData.push(smoothedValue);
		}
		return smoothedData;
	},
	calculateLineGraphData(inputArray: number[]) {
		const startPoint = inputArray[0];
		const endPoint = inputArray[inputArray.length - 1];
		const slope = (endPoint - startPoint) / (inputArray.length - 1);

		const yValues = inputArray.map((value, index) => {
			return startPoint + slope * index;
		});

		return yValues;
	},
	createReverseDateArray(days: number[]) {
		const today = new Date();
		const reverseDates = [];

		for (let i = days.length - 1; i >= 0; i--) {
			const date = new Date(today);
			date.setDate(today.getDate() - days[i]);

			const formattedDate = Utils.formatDate(date);
			reverseDates.push(formattedDate);
		}

		return reverseDates;
	},

	formatDate(date: Date) {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		return `${Utils.padZero(day)}.${Utils.padZero(month)}.${year}`;
	},

	padZero(number: number) {
		return number.toString().padStart(2, '0');
	},
	// Рассчет линии тренда методом наименьших квадратов.
	calculateTrendLine(data: number[]) {
		const n = data.length;
		let sumX = 0;
		let sumY = 0;
		let sumXY = 0;
		let sumX2 = 0;

		for (let i = 0; i < n; i++) {
			const x = i;
			const y = data[i];

			sumX += x;
			sumY += y;
			sumXY += x * y;
			sumX2 += x * x;
		}

		const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
		const intercept = (sumY - slope * sumX) / n;

		const trendLine = [];

		for (let i = 0; i < n; i++) {
			const x = i;
			const y = slope * x + intercept;
			trendLine.push(y);
		}

		return trendLine;
	},
	createForecastDatesArray(count: number) {
		if (count === 0) {
			return []
		}

		const today = new Date();
		const dates = [];

		for (let i = 1; i <= count; i++) {
			const date = new Date(today);
			date.setDate(today.getDate() + i);
			dates.push(date.toLocaleDateString());
		}

		return dates;
	},
	linearRegressionForecast(data: number[], numPredictions: number) {
		if (data.length < 2) {
			console.log("Недостаточно данных для прогнозирования");
			return [];
		}

		const predictions = [];

		// Вычисляем параметры для линейной регрессии (метод наименьших квадратов)
		const n = data.length;
		let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
		for (let i = 0; i < n; i++) {
			sumX += i;
			sumY += data[i];
			sumXY += i * data[i];
			sumX2 += i * i;
		}

		const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
		const intercept = (sumY - slope * sumX) / n;

		// Генерируем прогнозируемые значения
		for (let i = 0; i < numPredictions; i++) {
			const nextX = n + i;
			const nextY = slope * nextX + intercept;
			predictions.push(nextY);
		}

		return predictions;
	},
	calculateAbsoluteGrowth(dataArray: number[]) {
		// Получаем текущее значение (последний элемент массива)
		var currentValue = dataArray[dataArray.length - 1];

		// Получаем предыдущее значение (первый элемент массива)
		var previousValue = dataArray[0];

		// Расчет абсолютного прироста
		var absoluteGrowth = currentValue - previousValue;

		// Возвращаем результат
		return Math.abs(absoluteGrowth);
	},
	calculateGrowthRate(dataArray: number[]) {
		// Получаем текущее значение (последний элемент массива)
		var currentValue = dataArray[dataArray.length - 1];

		// Получаем предыдущее значение (первый элемент массива)
		var previousValue = dataArray[0];

		// Расчет темпа роста
		var growthRate = ((currentValue - previousValue) / previousValue) * 100;

		// Возвращаем результат
		return growthRate;
	},
	calculateDifference(dataArray: number[]) {
		return Math.max(...dataArray) - Math.min(...dataArray)
	}
}