// Libraries
import { useState, useMemo, useDeferredValue } from 'react';
import { FirstTab } from './components/FirstTab';
import { SecondTab } from './components/SecondTab';
import { ThirdTab } from './components/ThirdTab';

// Styles
import styles from './tabPage.module.scss';

const TABS = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD'
} as const;

type Tab = typeof TABS[keyof typeof TABS];

const performHeaveComputation = () => {
  let count = 0;
  for(let i = 0;i < 600000000; i++) count += 1;
}

export const TabPage = () => {
  const [tab, setTab] = useState<Tab>(TABS.FIRST);
  const onTabChange = event => setTab(event.target.value);

  const deferredTab = useDeferredValue(tab);

  let tabElement = useMemo(() => {
    performHeaveComputation();

    switch(deferredTab) {
      case TABS.FIRST: {
        return <FirstTab />
      }
  
      case TABS.SECOND: {
        return <SecondTab />
      }
      
      default: {
        return <ThirdTab />
      }
    }
  }, [deferredTab]);

  return (
    <div className={styles.tabPage}>
      <div className={styles.tabs}>
        <label>
          <input
            type="radio"
            name="Tab"
            value={TABS.FIRST}
            onChange={onTabChange}
            checked={tab === TABS.FIRST}
          />
          First
        </label>
        <label>
          <input
            type="radio"
            name="Tab"
            value={TABS.SECOND}
            onChange={onTabChange}
            checked={tab === TABS.SECOND}
          />
          Second
        </label>
        <label>
          <input
            type="radio"
            name="Tab"
            value={TABS.THIRD}
            onChange={onTabChange}
            checked={tab === TABS.THIRD}
          />
          Third
        </label>
      </div>
      <div>
        {tabElement}
      </div>
    </div>
  )
}