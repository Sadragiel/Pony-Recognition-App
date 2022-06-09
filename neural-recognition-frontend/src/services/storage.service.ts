import { AnalyzedEntity } from "./analyze.service";

const KEY = 'ANALYZED_RESULTS';

export type SavedResultData = AnalyzedEntity & {
  imageUrl: string,
}

export function saveAnalizeResult(analyzedEntity: AnalyzedEntity, imageUrl: string) {
  const stredDataString = localStorage.getItem(KEY) ?? '[]';
  const dataToSave = [
    {
      ...analyzedEntity,
      imageUrl,
    },
    ...JSON.parse(stredDataString),
  ];

  localStorage.setItem(KEY, JSON.stringify(dataToSave));
}

export function loadAnalizeResults(): SavedResultData[] {
  return JSON.parse(localStorage.getItem(KEY) ?? '[]');
}
