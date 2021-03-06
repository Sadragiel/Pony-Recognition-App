

const mockResult = [
  0.1,
  0.3,
  0.1,
  0.2,
  0.1,
  0.1,
];

// Order should be discussed with BE
const predictionClasses = [
  'twilight sparkle',
  'pinkie pie',
  'coloratura',
  'apple bloom',
  'roseluck',
  'rainbow dash',
  'spitfire',
  'sweetie belle',
  'pear butter',
  'lyra heartstrings',
  'tempest shadow',
  'rarity',
  'coco pommel',
  'princess luna',
  'sunset shimmer',
  'applejack',
  'fluttershy',
  'derpy hooves',
  'scootaloo',
] as const;

export type AnalyzedEntity = {
  ponyName: typeof predictionClasses[number],
  prediction: number,
};

export async function analyze(file: File): Promise<AnalyzedEntity[]> {
  const formData = new FormData();
  formData.append("Image", file);
  let analizeResult: number[];

  try {
    const res = await fetch(`http://localhost:5000/imageclassifier/predict`, { method: 'POST', body: formData })
    const data: any[] = await res.json();

    analizeResult = data[0]; // should be modified once BE will be ready and covvered with types
  } catch {
    analizeResult = mockResult;
  }

  return analizeResult.map((prediction, index) => {
    const ponyName = predictionClasses[index];
    return {
      ponyName,
      prediction: prediction * 100,
    };
  }).sort((a, b) => b.prediction - a.prediction);
}
