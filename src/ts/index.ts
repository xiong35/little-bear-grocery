export type DelicaciesData = {
  /** 这餐的名字 */
  name?: string;
  /** 在什么时候做这餐 */
  schedule?: number;
  /** 本餐需要的原料 */
  ingredients?: Record<string, Gram>;
};

/** 个/份 */
export type Unit = number;
/** 克 */
export type Gram = number;

/** 原料的类型定义 */
export type Ingredient = {
  name?: string;
  gramPerUnit?: number;
  lastUsedAt?: number;
};
