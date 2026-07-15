// Import explicite (pas de `import *`) pour que le bundler élimine les icônes Tabler non utilisées.
import {
  IconBuildingFactory2,
  IconClockBolt,
  IconWall,
  IconTruck,
  IconBuildingStore,
  IconRuler2,
  IconChecklist,
  IconTruckLoading,
  IconTir,
} from '@tabler/icons-react';

export const iconMap = {
  IconBuildingFactory2,
  IconClockBolt,
  IconWall,
  IconTruck,
  IconBuildingStore,
  IconRuler2,
  IconChecklist,
  IconTruckLoading,
  IconTir,
};

export type IconName = keyof typeof iconMap;
