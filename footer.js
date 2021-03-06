/*
LogicEmu

Copyright (c) 2018-2020 Lode Vandevenne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
Final load of LogicEmu, to load the initial circuit after everything has
been initialized and registered.
*/
createMenuUI();

var initialCircuitText = introText;
var initialTitle = introTitle;
var initialId = introId;
var initialRegisteredCircuit = undefined;

var loaded = false;
if(!loaded) loaded = maybeLoadFromLinkId();
if(!loaded) loaded = maybeLoadFromUrlCode();
if(!loaded) loaded = maybeLoadFromLocalStorage();

if(initialCircuitText) {
  parseText(initialCircuitText, initialTitle, initialId ? linkableCircuits[initialId] : null, 2);
}

