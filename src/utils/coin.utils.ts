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
	}
}