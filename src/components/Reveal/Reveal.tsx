import React, { useState, useEffect } from 'react';
import { useScrollPosition } from 'utils/useScrollPosition';

function GetViewportHeight()
{
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

interface Ref {
  current?: {
    offsetTop: number,
    offsetParent: {
      offsetTop: number
    }
  }
}

type Props = {
  direction: string,
  offset?: number
  cascade?: boolean
}

const Reveal: React.FC<Props> = (props) => {
  const { children, direction, offset, cascade } = props;
  const [childClass, setChildClass] = useState('');
  const [triggerPosition, setTriggerPosition] = useState(0);
  let refArray: React.ReactNode[] = [];

  useEffect(() => {
    const ref = refArray[0] as Ref;
    const element = ref.current;
    if(element === undefined || element === null) return;

    if(element.offsetParent !== null && element.offsetParent.offsetTop !== 0) {
      if(element.offsetParent.offsetTop < GetViewportHeight()) {
        if(cascade) {
          setChildClass(`slide-group-${direction}`);
        } else {
          setChildClass(`slide-in-${direction}`);
        }
      } else {
        setTriggerPosition(element.offsetParent.offsetTop || 0);
      }
    } else {
      if(element.offsetTop < GetViewportHeight()) {
        if(cascade) {
          setChildClass(`slide-group-${direction}`);
        } else {
          setChildClass(`slide-in-${direction}`);
        }
      } else {
        setTriggerPosition(element.offsetTop);
      }
    }
  }, [setTriggerPosition, refArray, cascade, direction]);

  useScrollPosition(({prevPos, currPos}) => {
    let scrolledDown = prevPos.y >= currPos.y;

    if (scrolledDown) {
      let specificOffset = offset || 10;
      const offsetHeight = GetViewportHeight() * (specificOffset / 100);
      const scrollPosition = currPos.y * (-1) + GetViewportHeight();
      if (scrollPosition > triggerPosition + offsetHeight)
      {
        if(cascade) {
          setChildClass(`slide-group-${direction}`);
        } else {
          setChildClass(`slide-in-${direction}`);
        }
      }
    }
  });

  let i = 0;

  function addClassesToChild(child: React.ReactNode, className: string) {
    const childElement = child as React.ReactElement;
    refArray[i] = React.createRef();
    const previousProps = childElement.props;

    if(previousProps.className === className) {
      return;
    }

    let previousClassName;
    if(previousProps.className === undefined) {
      previousClassName = '';
    } else {
      previousClassName = previousProps.className + ' ';
    }

    const props = {
      ...previousProps,
      className: previousClassName + 'faded ' + className,
      ref: refArray[i]
    };

    i++;
    return React.cloneElement(childElement, props);
  }

  return (
    <>
      { React.Children.map(children, child => addClassesToChild(child, childClass)) }
    </>
  );
}

export default Reveal;