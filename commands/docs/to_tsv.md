---
title: to tsv
categories: |
  formats
version: 0.75.0
formats: |
  Convert table into .tsv text
usage: |
  Convert table into .tsv text
---

# <code>{{ $frontmatter.title }}</code> for formats

<div class='command-title'>{{ $frontmatter.formats }}</div>

## Signature

```> to tsv --noheaders```

## Parameters

 -  `--noheaders`: do not output the column names as the first row

## Examples

Outputs an TSV string representing the contents of this table
```shell
> [[foo bar]; [1 2]] | to tsv
```

Outputs an TSV string representing the contents of this record
```shell
> {a: 1 b: 2} | to tsv
```