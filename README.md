# README: URL-List-Loader

***NOT YET WORKING WITH CHROME***

## Description

This addon for Firefox allows the user to open multiple URLs in seperate tabs
by pasting a list containing URLs into the add on. The add on filters the list
to find starting with "http" or "https" (case insensitive) and attempts to
open them in their own tabs.

## Reason for development

I make frequent use of the
[FoxyTab](https://addons.mozilla.org/en-US/firefox/addon/foxytab/) add on to
copy tab URL and titles in order to save them in text/Markdown files while
researching details. In this way I can create targetted bookmark files, which I
can easily annotate, or add these details into project documentation, for easy
reference.

While this is very effective, it is tedious having to copy each separate URL
from these documents to paste into the browser when I want to refer to them
which is why I developed this addon.

## Usage

If the addon installs correctly, it will place its icon on the browser's toolbar.

Clicking this icon will open up a window that will have a text area into which
the URLs can be pasted, and a button, "Open Pages", that when pressed will
attempt to open tabs for each of the URLs the addon is able to filter from the
pasted text.

## Example

The following is an example of the text captured by FoxyTab->Copy->Titles_URLsAll:

```
Debugging with Firefox Developer Tools
about:debugging

Add-ons Manager
about:addons

mpmansell/URL-List-Loader: Opens muliple tabs from a pasted in list
https://github.com/mpmansell/URL-List-Loader

```



If this is copied, and pasted, into the text area of this addon,  only the Github URL will be loaded, while the others are ignored.




## See also:
1. https://addons.mozilla.org/en-US/firefox/addon/foxytab/
