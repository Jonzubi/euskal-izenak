import { type StateCreator, create } from 'zustand';
import { type PersistOptions, persist } from 'zustand/middleware';

interface Decision {
  name: string;
  liked: boolean;
  date: Date;
}

interface DecisionStore {
  decisions: Decision[];
  addDecision: (decision: Decision) => void;
  removeDecision: (decision: Decision) => void;
}

type DecisionPersist = (
  config: StateCreator<DecisionStore>,
  options: PersistOptions<DecisionStore>,
) => StateCreator<DecisionStore>;

export const useDecisionStore = create<DecisionStore>(
  (persist as DecisionPersist)(
    (set, get) => ({
      decisions: [],
      addDecision: (decision) => {
        set((state) => ({
          decisions: [...state.decisions, decision],
        }));
      },
      removeDecision: (decision) => {
        set((state) => ({
          decisions: state.decisions.filter((d) => d.name !== decision.name),
        }));
      },
    }),
    {
      name: 'decisions-store',
    },
  ),
);
