/**
 * 描述:
 * 作者: 张春燕 2017/9/14 14:22.
 */
import {
  NAMESPACE
} from './config';

let namespace = '';

if (NAMESPACE) {
  namespace = NAMESPACE + '-';
}
const ClassNameMixin = {

  setClassNS (classPrefix) {
    const prefix = classPrefix || '';
    return namespace + prefix;
  },
  getClassSet (props, classPrefix) {
    let classNames = [];
    const {
      maSize,
      maStyle,
      active,
      disabled
    } = props;
    let prefix = namespace;
    if (classPrefix) {
      prefix = this.setClassNS(classPrefix) + '-';
    }
    if (maSize) {
      classNames.push(prefix + maSize);
    }
    if (maStyle) {
      classNames.push(prefix + maStyle);
    }
    if (active) {
      classNames.push(namespace + active);
    }
    if (disabled) {
      classNames.push(namespace + disabled);
    }
    console.log(classNames);
    return classNames;
  },

  prefixClass (subClass) {
    return this.setClassNS() + '-' + subClass;
  }
};

export default ClassNameMixin;
