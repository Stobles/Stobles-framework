import { withoutNull } from "./utils/arrays";

export const DOM_TYPES = {
  ELEMENT: "element",
  FRAGMENT: "fragment",
  TEXT: "text",
};

export function h(
  tag: string,
  props: Record<string, unknown> = {},
  children: unknown[]
) {
  return {
    tag,
    props,
    children: withoutNull(children),
    type: DOM_TYPES.ELEMENT,
  };
}

export function mapTextNodes(children: unknown[]) {
  return children.map((item) => {
    return typeof item === "string" ? hString(item) : item;
  });
}

export function hString(str: string) {
  return { type: DOM_TYPES.TEXT, value: str };
}

export function hFragment(children: unknown[]) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNull(children)),
  };
}
