import React from 'react';
import {Text} from './Text';

export default {
    title: "Text",
    componengt: Text
}

const STORY_TEXT = "I love storybook"

export const Default = () => <Text>{STORY_TEXT}</Text>

export const Red = () => <Text Red>{STORY_TEXT}</Text>

export const Italic = () => <Text Italic>{STORY_TEXT}</Text>

export const Underline  = () => <Text underline>{STORY_TEXT}</Text>