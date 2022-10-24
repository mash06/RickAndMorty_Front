import {Character} from './Character';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  characters : Character[];
  episode: string;
  url: string;
  created: string;
  showOnScreen : boolean;
}
