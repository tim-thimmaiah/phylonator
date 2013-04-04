/**
 * Newick format parser in JavaScript.
 *
 * Copyright (c) Jason Davies 2010.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function(exports){exports.parse=function(s){var ancestors=[];var tree={};var tokens=s.split(/\s*(;|\(|\)|,|:)\s*/);for(var i=0;i<tokens.length;i++){var token=tokens[i];switch(token){case "(":var subtree={};tree.branchset=[subtree];ancestors.push(tree);tree=subtree;break;case ",":var subtree={};ancestors[ancestors.length-1].branchset.push(subtree);tree=subtree;break;case ")":tree=ancestors.pop();break;case ":":break;default:var x=tokens[i-1];if(x==")"||x=="("||x==",")tree.name=token;else if(x==":")tree.length=
parseFloat(token)}}return tree}})(typeof exports!=="undefined"?exports:this.Newick={});
