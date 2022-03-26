import React from "react";

export interface Slide {
  content?: string;
  kind: number;
}

export interface Option {
  description: string;
  isTrue: boolean;
  index?: number;
}
export interface Question {
  description: string;
  options: Option[];
  lecture?: string;
}
