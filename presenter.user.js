// ==UserScript==
// @name        Roll20 "Radiant Damage" presenter
// @namespace   Violentmonkey Scripts
// @match       https://app.roll20.net/editor/*
// @icon        data:image/x-icon;base64,AAABAAMAAAAAAAEAIABjAwAANgAAAAAAAAABACAAvAkAAJkDAAAAAAAAAQAgAFsTAABVDQAAiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKklEQVQ4T21SXWwUVRQ+5869d2dnZ1t26XZtCgYRiSGlWhTwAYj6Imki8EBKIjyYFKm0RVOCEEJISjUSI4kJRkMJpqkhJDTypH3wQamIKcZSFWMMTdP0we3S7tp2/2Z2Zu7cy+6SLU3lPn7n3O/nnIPwhKc2DMUgMXsCBGEQUi+AItchtm4QJ1udle24HMhu7K8LJv0ezXK6kGo2UHYBqNquCs7uEsmcNLSPtafrr+LfbW713xKBarrWLJK5gyClJFQTUBCr5Vr9G2p5NSLj7YQAs0EiBU3ZtCXyOX7fNl8mwcXNX0b0SXFKKNiGrmzRJNT65U6D35BKNtIg/9XLFPcrXzYSQKmoNgMcxwjnN/XFjouo9twOZ4fvzklf6ku2CNosGjwv0lYfECjQqPmpm873Lo+LOhtZVex+rRJh1rg4Ki3/lWoeEgl+gQW3Vbn+M+U6Mdk15annfUdsWRIx6bl4/lgvOualTWkKH7iL9tuVTBrOBaLGABjaKT9lA3IChGm+DOAZ71/rvAJV0THXm+fqpg73YeGpga3/Kbc9P2t3lAusXu/jceO92p4tqwgioMlKFhDSXTd/crJeVlrem0TTirEo64+mOo7jfPPXTblEviu1INopJRMsQO6U5tHe+NkuyI8mwdgaBzFrw8LVf4C4/unCjN0LATJeF9JSa9Pv7sPJ2JUNVt65lJMYpTF+Xc1YH5rb46zh5EuQ+zkBrCEEmslhunsEsCQgdf4jUBAhR7zanO/cjPdfH2pM3X5wjzwXPuhNW8dEQbT+/zjLsVUF5rHQR8SApEoWO3e43U147+h3kcTg9HD8wPq98yPJPRRI9EnnXcUkY+MI0nFTzok3Ft7ZV5no8JqBt+yUfSEQ5594ieJZ35erH2s+ptOC9DesZd+KjNMVfrF+x+7RtskKQXk1Q+u+2pu3RC+r0QchWTgufLWmaru0XOA6/UFE+O9+zm0J15g9bVOH/qqsfbndsSNjxi+3/ng/ENQXxINsj3DlxnI9EOQ33AZ+l2a8qc77h4cQ8dFAVhJUwf4jY4z8ORFNJzPDhLPxbYee7ZyYCWPH5Ze9lfN5CH9oWR+tekQvAAAAAElFTkSuQmCCiVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAJg0lEQVRYR51XaXQUVRa+tfaS9JJ0ku5sBJJIIBDWMMQsOuaQiQNhEUgEoxxAwaBHzTjKeIIj6hF1xuNRRBEUBkG2CQwqhiVsGWURkH0RJElnIZ1O0lt6ra6u5U11h8QEEsB5f6pe1bv3fvfe7913Hwa/c6DiShpOuaaDja0AtX4REPbXgINmyIj9GDs0tfl3qgPsfgXQ4jMUVF8sAitTAb7AOECSJJmQCxr7W2DzFQCFd4JKvg7GxH+MHZlqul+99wSA3qwhYVvTZDB7K8DNTkAI8KBySVAMAdBa30ZW/6RugxiJ20WN8kt8sGIldvYp872ADAggZHhnSyHf7KrA3WxW0DCGYQKmJC2ijLiEkdgpPEO/EhrteaKDm4FxYiYwXDLikRwBwjCKtIla2RryQdUqbPcT7QMBuQNAUJhP3VgANu8y5OHHAU00EDh+GmlkPxFDtOchTuHkT3SkkOlKI6ihAXZIqtN8U0CjawKD6IVrrjTe4ZmI+dFExAtjREKKlIpcS+fpPsF2lNhvB3IngNS9Mo5sW0SJdD0YtI3g9sVwbe6xBMdliiw3FvNxyRgiAR8b90fRZH0Zj1V8LBg9byBXoABXUBZE41eQDDtDqsPPQHzEr8AJcn+LZRShVVyhL5ae7heAxCcMiivDvI2QSjhc4zBHYALOoAmI5YaCKIaJobwHsQaZB0BEK9dT0YrvuWu2XZhaVkOOiq4IHDf/IIqCvHsdDrgkhTgko81Sus6TSvq0GEGeJTOTLwPb1iFFQ7jFJQBm1KZ8sa5zOzBCJEKI6FLSNbrfukwjkHLrUE5Ly2arb1SKHj4Dw5BIpUWX8B3eQsHOLJJSeEuq+9klF9QkcQhJYBhMJ6uSm5+dE5oHf7N/qhrJHqy70GX8bgMBHaNejtG4XWhxfSJKfAmBDCevkPmpswP7fj0h+Rx5L+aT0WH/CrMsfrrHQbShRu544XIteISEuwlLOTbKixILA3uafxB9fFz3WhwkTxK05QLGqcSbnnfuBYBO1C4Iv7ngq94RBlvM2v8IHb6ZvwWsrxopgEg2TL2At/LpotW79HYjmIJsiywalGetatqPGCFlIBAYBjydl5iu+XF2bV8AyevLWaPro4EAEGrZSWXWoEXMEeNP0vYK717X2xAVJ/8Q06ousNcsG4N1oz82ECqq3vpoTPqIHSWB31KQum6szRChY443V3cxvu/AceCp0YZHsVbn03w7M3dA70jMK394SDbzs+lz3sVm97eO0iu2RA/TrCX/O+e4REIxRCIXvvI12ThDremqZTViuJjbBUmdYqciLmIVc7XtEDVETdFZeuDOWyHwiw2k+gjynDjAVRQwR25KT9kOIl652nfJfkDawlRfXQioVN3zOo6bci1KmJF59lkuBMAR+WW5GC5EdLrF8ZwjMKVPbiSvlOOjs/kbzk+pQeF5sTXFIHEFyNgwaCv6FhT5iaB+aSwgVgD2uBna5+zjFGn6Qm+Ho0yw+Ev6AJAiqZ80ZLJwqmVl5F/SR2FvPsKHAFiGfLVYcHqnu7X0Udbofa930ZHHqz4k1NQZ7rp9i2ZJBq54KAHMC/ZD0o+Pg/dAM2gWjoCOv/4A7EUrJP08F5ombAPhpucEnTXoWfeRhlt86SpihJI26UfolvAX2j+4ymWMfARuAWgfvuEptsn9Dzwn9inrIdMBhDCJB5KAxGx9YXKuvdq4V2D4oUF20Ekq0K/IgbA/DwbTgmpI2DoZGiZuh4DRCQ/UL4DWhQfBva8JKYfr5vk6fRlcK7O0i4xSDdHKd2oi8Ivg4IvjC6LGBathKAItaZtn+2/YtsvzE/PMJ01VoleIDJZSZYrqJUJACrbR836w6MiHqiHl8GzwX7dD6ytHgWtxQ3rDQmiYthv8V+0wvH4+GCd/C55jbUAqyTr1jKRC67eNR3mfINUMBPLB4eVhHi6fRBCTZC3L6SFhffzaKYyJqZIPU8+3Wdh5nC2Qj6voKymTk2a07K7/SWDE6KCCxA9yIKZsNNi3/wqIE6FzX0NoTkbIIGDygnJ8DFwZtQVEDxdKvSxRvUwkRaevwbtKqpmiblryQ+hw4zZCTtQNtZRN6inFl8JWT+K8gYOUQfGZG8etrJn5u3qYfhY4nQX+Vua57vMgqnQoqHJ7CiB07m0C77l2SFj2ByDUNLR+eA680u7oHoSCsMUXpWY1HmzcKfKiPnFG8qOOLdfPkFrZ/tGOJVN7yH49c3OO46z9KBVJnkbJmtddjd6XI8doK9w1HcdFXlD2ZnLvI+bOff7bidldqOQG5RqI1ezzt9oXasLk//YbnVtxJb4ry/fCrB4AV6ftHdtWVXuGkJHutPKMB9piBM61onYja/VPG6jo3O93nMT9UdmJ2Xh2ZKNrw/U3Au1MOa2htuY6l5T2ALi0uGaYad2ly1JVQfq5KWPEsJha554Ly0UkyshelnjpvXve+/12MMF/wRFcG3xXJGu/yz1Wcuxg1BffcZJTijjF+kdaFz3TA+Di0pqEm+uuV6kS1W9H5xrOoocNZsfXVw2c0Zt/v54OtE4mNSTZ50qrLz6zN4F3cnLLMesbhJZoLrg2//UeAMFter68RtO6q66CNzPPkVrFniF5yUuNNTe+Dji4vP46164G5faGpXcJk+JJER5lsnIhIgk/U+vcRCqpG1RK1Iu68YPPZX6RGdoqPbqrH6uO8Rxv2MRauYLgSUZHyg4MfSyprOG75k/9Fv/kbg/70qx/v4NrMJpwaEapSxkGi/bXOj8XOEFJKPH28GTVC0WX5wVb2T4OhCaoEhHfr9g8y2Hyvsv5uBRaS5+KyTE86TlmWc5Y2dJgx9wl1vug7eNH6B9Bk2Z9pvZxe2dggrve8770TVTqFJvih2mXP1Q9q89dod97wTfzv9F2nrS/ytjZF4EkmqJy9CXiBVuZx8w8L5m+dVx3J6EvAEKBG6NHJs60WB2zvSbXazKpGdWmaV8pPlx8MtjU3B6zu96MKqdXplt+cb3vDwgj40YbSth621Sf2b9M2h399o5UGHklPiehpOla+4sBO1+k0SvfCv+bbFNJSVfz0d+459WssriScFjQVGeH++W4EVFlQqO7wHbT808kiHRvhfIw6kRC1uDiurrWCuAwMfpBwzvz1hR2DGS4Xw7cbXHlZzXhUCcTij960L8+d+uT1gb3GlHoqpJyjWy/frzhidKtRY5d757SzayYGLwB3RHu/ysCA4H6PHdzUUeLZ6tcRe+LnRe/cN6rhd57edvf//8BmVZAXSkxlFoAAAAASUVORK5CYIKJUE5HDQoaCgAAAA1JSERSAAAAMAAAADAIBgAAAFcC+YcAABMiSURBVGhDtVkJeFTVFT73LfNmzUxmJstkX4AQEhCRugAWQhWtIGCVKIhIQaVY0ApW22IrtbhhwVpFBVwoAiogigoqUFEKCCFshiUkEEKSyTKZzL69vffNMMkkYbPa+32QmXn3nnv+e8/yn/MQ/ERDBhnBpA06qPD1hTA5E0RJB7q0eWAOPgJtvlLIMr4GRjgC2yf5EULST7QtoJ9CkDx9pxr2O64Fh/cuCLHjICLkgMxsA731fsiO/AmqnXNBQzpBq94OFvVGyNZ8g3aUe3+KvX8UAHmSTELTp4PgbOtccEbGgCSn4n80AJIBVF9CRvE0MDYugOr2R/AFEYAIEUjkAgOzFwpsr8Cw8XvRq4j9MUB+MACsGYJrKjXAnyiAoHAftASnQkiwgWJCnYOQAWEAuvgNnAeQqClJ+sCk2wR6egXoNVVwfFIQRYH/sPGDAMhztzLwrXOw0By4i2TFCRhAgSzhW8BD2ZkARXGQgIKIrGE2EaakR8EizYETrvkyL+lBQniChPdEeL6M5+O5GlWLzJBfSCZmIzWo31706Qj/D4FwRQBkWSbg1q+KpdqW2WD33S7zsk2WJGwqWBWEFOPgkEHlkDT0MWRg9hOIOAwa4Xvoq2sEr9EiNDquoiLyIAjyN4AUGSh5+Czs5GoZY1AQYxkiIlE7WFXfECWWf4LHXYkOzuKvBMglASgnzm5vz6U5mCw4/b9GAT4DnzNLIOSTSNlFmDSnSKO6AgZb90NQrgc5GAIXyQQy9Jz+4zHt+JCxbkiSR71rws8NwGayYOVoPlmVRR9x/kwKh4dKbrZUEvlUQpSTQJY1SE37IUWznjQSb8H1g6rRiqGhSwG5KAB50noSTkRu4/yROUQHZ5IZql5GqJYk0GkyRXOGHWhuY5xBClqFdJEN58teti/ioEAWxFyqr2kz9E15U6xu+QXZJ+NbqLSXiZ7QXBChA+lVpwk9XQsaph5SkpogjQjzJ0NW2e0rIASuUI5IRVipXFGDgEjXfUgXqt9EG8rFi4G4OADFKcd8kMV55WTJI/ilHCNL6dVmsq69RHYJQ5HAlsouLg9bswlEWS+LskYxa0QTbmlk5lii3pMDzf6lZI7xNS7TvBXtP/c+CkjFUR8hEYsQBEUSPKRJ1Ygk9UnZzBwg+xqqoDXcjM1MxSFIUmn1Iuy6o/pSzt0NQPTUcfzz12l0BugwQoSw8QQ5ABqD12F/u0YO8XlIEHSyhMiYMyYOfGIE4uWspJdVpfkvi9+dXCF7uHEyQ5ymh2SXS8HAaKGq44W478QdOS4EETjEUkQY1LQdUdQhSFPvRxzxvUhJzQwju+H6AQHI8HOwsEzEazqjVacS7NAPSlGrpwzCch9RlgsRL+ZLrGxDvGBAMkFK0TCprIsviX+OycLqy4SROqwakH4v78aAz3hekXjJiH/mUIr+Zenn+a+j7bWrMKhR8UjUpYcis0t2LJqJ2LGJsKyhWkCFzgFF1eFNaolMy2764F0VcRBRbZQoIxSv/gNX63oK66lSTEHCx4yv7gKmlwgiFkCVSEKQKIwy9X9Fo9LeR582bhE9kdLYevxUq6ojB1knIb+UytV2rJE5wXIh5WOSYnsqn+OHhTMgfiApcZdDhcnvaE5NnxunI50ahgevmcIfda7GaLAZXeike2LpDoTUqg5qh9nuC9W6p8oN/j/iQ4nKjv2HTyPf8K72utQF4e3NL0kd7BQpuk989DyUC7ssDtcC2c/8pLb6/qXxGZ0A5Id39vGvqtonhQSLcg4/ZCAChali88OEQVcrHGlaDRGpIFG1KAYV4SVLbNNkxLPSiY53xIiIQ/KVjC5wWIaHKUmZqDk85dveAB7bq/Gs/367ZA8N77Lzy2+Ac4KMbJrN5Pi8WejT+gVSa2S2iJNcT0+JStIz38LInBnkUceTQpPvwZhfXfnA4bdK3ccyXnNkcn1vAPjKvaVrXxBOOB7HH3GW726lF9sGaalm1cC0uylvWIyc866Xw2LWReeSyE/kmB43Dsnd5d56/EshzOdeKQIlSCAT9ZG5MOUBdLCLyXZb777+g1+xBx3vAS9qrwRA1Cat2pXqkf2eYf9T80+5LXRnjB70HjFfwLdlUu0ir0ueTpwTJkRqXc/JghTd63KDIAgepWuet44bsghn506a0Q1Ax1WrSrizwS2Sj89NCLUXlY0YooEZkjoZsVI+d9SxEmdaTeLkOJBu5kQSEaa/8U9Mpm2j78CZf0luJaxe3pQIivAxfZNmJZ+Y/qHCv7qZkCIgMui9vEiGQQ5917JS9LI3XfZEMAGjC/RLmKEZKyJfnl0reTmc7K5sID3dQN+cdys64h4eanQvwfQj6cIr4/kBgFQT9cnDs6doGKYZtt7WEM/OsTwA61VhU/ta8tr0Dx0H2keJnvBsxRQupo6SaEgTddR6c+Ekz0H7OOGcb5Esgi66QpGoFIw97Sj+DLMaZXPCpllJDbP8nd3heE3wsmMuB500q/ek5lueF9jQZF1Z6kz06m3RQug8gK1MAM5sJYt0lU5ObhAbgotFUbHNC9cXJEUEmRLrbJye97D13vXg54eQ+Qakv7sfENl64CscEPz0NIhuVqGjQBeZQDehDxBGFYS2nYPI7mZAFLToBqbMiCTpxMiu+k3ReqHXiN2AEumoXMNyk0QcQiQ31Tmy3y35q8oiXQBK1qt89a6PIZmEsC3pzcDh1pWiIKd12VkXbVAyIKbRX5Cl2geZNvnB8Gn3U6oSM522YRyQuQaQOREwoYPgqhPQ8YfdQPUxQurbY4DCIGQBSwwL4Hr8PxBcVy0SFmat6RdF8zsqzj4rnPXPjBdHXYn0/L6ELBiH5c5Un+roJzL8Tcl3zB4ZL0VjN3BNJe1qPrxO8gVL1OP7zbZ/VveqFBAGxgB02WH0G0126PJ1v9X2Mdd7djV9JPNiZtqro0E/tT/4156E8DdNYHr0GqAyddA87hNIfnQIaCcWgPf1o8DbA5D8yBDAxQvYR28EsSXsYAqTZgomppk97lwr+sX+3W/9/A1oSZf11txb5W8aHyf8kGXm80cjSDSha5bTThf1ttAYGENeY53hdoTux9GovGdCUzgJnaH5xDKx36PuTdUviW2RcqSnUMrfbgDKpgPnc5XA1nRA5prbQHtTNrRM/RLS3xgNfL0P7JO3gtjBQuqLI8D4UCl+tg0CG07LKJXZY/tV3p32zfa5Ypv/CUkCVXdLkkGVodtrK7b8OnywdZ0sEP60XPMt6Hg512VCO3dSjllnl3F1vntVuaZ5QSuT5K9oe1HCCS1OraKTNYTT+svcidwxV0qkzrdSEsAaPTEqShVAVWgCy5zBYLx/AEQOOsDxt72QvXE8BL6oh+YHd4AU4ME6bwhY/3o9dCzcD+0vVSoOLapKU+cxGdpv3Lsb10kBsaQr/EbtXyJtSYtT03Ubw7WOz2m9+lD67eJEtCJWcsZMaP160v50cAlf7ZtDJKuXErdkb2nfVLsF02ld/BYwFF6dY1iiHZD3Smh/7WuSK3xHPFLhfADm+4vB8vBVQGObD+1rhfYXKoFvC0CfffeAHwOwP/DvGID5V0PqwuuhHQNwLK7E3BHjN1BV2utTp4XbuVGhKtdiXCBF6+2oghSEkwbb7jGoRX1kn+NtKsfweebb+ZNRWZniUecBYDrdULzqWa7a/yQyUJupUdZ5HftcXwjtkaIoQDyNMqkOJ5dq75FE5qrAwfaV2FmNUeqL864Z23/my6NACnLgWHoI3BtqQGgNA52ugaIDU4A764Wz5VtAcHGQ+eJwsMwaCA2/3gbudTVRJXGWZWkbs9hyV+Gylg/PfhBpDY2KJz/CSNdpS7Xj9Q54gDvjeoTpk/xe9iLdTFQeKzPj9QCqLXjrKf5s8BkqmfneVJz+K7vD9TR7JjgV016EnS6syTM8nT28aF3DtqpPxNbI0Nj5yECaGej7ye2guy4d3B/WgPeresAZGUccCfy77ZCDgRnH5kHL8weAPe2BzGeHY1Ok4NTwDcA2dHVQCIPqlG6AsRwkKsNz1LFG5ESLkm8oC70jY3zxzOCO6jVCU+RGdT/zG/nVU7vXA0omPml4/fe8n3+R1FEdTD/D7QGBLA0cdy+TMLOkjUxFxuis6b5jzjuDZ3wLcW3R2QtSZeug/5YJoO6fDCBgSbjuUAam5VA74TMsWYa8V0aBptgcdRfBw0Lz8xXQ9uZxPFfqLGBwEhSYQsNKQ2nmwvY99Ys5JzdVkYN9Y1nWhH7LXKuO7EYh0UL3tywpOjH1yTidiN8UqkpZPpd3Rv4hEUgwDk592BWQj4SbPF9IET7JODRtplqlrfFU1q+TwlJhIoEitRQklWUCmdQ9eMiiBL6v7VGFNf1NYBqdDaReBb49zYADBEhhsbNsigdqEtcMxlE5kyI+QfYdaV4tCcioKzTNt2Zpm9w7mzYRskRiPrSopGbG050+Ev9wouS9B/wnO5Zjd0DqIsMKwap7zl/V8SFppNuuunnAjOPbjv1RsLOPKkX5heqny9ZUiYyuR26J66DIoFOZ7em3Fj7QvLf5qYjdP9Yy2DKNagv/PFwX/DMOWDK+kacH2x9a1AvA8Z+vn9Kxp3U1jgAknaU5kHdz1tiag87xmhTV9wRLEf6j7WslP18YX/j/+oso0qvN088zXJ2yz3HYXm67Oudf3m/Ovcq2h8cqzWFKT/5xmP/hl3oDuHvLhLaNpzfKIm5qaEl3wSMDrvUNaW8Y8B89+vaT1nfZJv/d0Q7zTz4SuxvRNqNMW1Rf08PSp2XekeRi93C21g/OfCYGhBLcpRDVedrfDTsz47XeJjR9x83n3jv+OYi4K0EBm3XPgNsHrrlpe/uM3YajX57chDgpWYlb8Uo89pnAAafrXYXyLNZCw72rTjKrYO79PiMuK7HlFl+P80KHZaDhkas+LT+1Z9gHPwsccn4kRaRsTCJ5/WDL7GGVk9/uBaB6ztfDa96s+jciKJ5Oor+23tz3yaHvl1UrEeq7SV8lp1MsHfYmYUtu/8nvoKfAAEvx15oFj9JSrBjzVbbvWONfIh2Ru/C7B435hrQZw3aVr+ttQs/tGlC34sTbGoN2jS1b/VEkL0WvkTh18egxJ7/b8JVRqG/7rRBA2fH4373BpfyaGJt61mKJKvZs2SQ+w31HQvSrU3UrRuwsP1U959v8EB9OCrh8zUQjujHoDD6oLTIsuXHLnTt6AVCaW65X9+tPfdJgCLm5eyKn/Y9JBPDGQuOTdKF5h++QfT7XEJ4j8lK0erpUMZ5YRVwIVuL6xLm4OcZSKfRm05DsJ4RIJNd/1LlcYkWzNkPzbsSoWpE/fbDDMcARKTtPI3rp8dV9q3X8d+Kfw+cCc/A7AMyDME/Rkm2qdO0L2SUZm+0nWqZEmsPzxLBg7g6ge5uxN4BuMfR8/O/+G0kTPlWmdpVpSO5SX6392si54N94Hx+lMgQJAmbBn5XMzPlNn4W3OLrfWcK39bi5a2xRDQ03OBcEm9lbY41YHBkYwq3N072cfWPOG66Ktome2o7nxKCcklh4xNuIXcp3V7C7nceedfIdGoV02YZX0q7LXtpyuvmWQI33WSkg58i4oYfpsKBKV1focrTP5Dw2eGdJeUmURvcyocQfK5dXaltX10721HjnCiGxP6YTDMmgoCE3aYmuIG0ZV+MYH6gPLBRYITO2rqeyPQ2se6hMBE6ShFdbqF+WNSb/NXtF60T3Cefz2GyMOJ4KtIpo1GYb3jWXZr1R9n6Zs6ezX9KUFYq97S1tsauubXIoIEzmw1wuohCrMatXWYbY/sHXua8Ong0u5INCUe8OW08jin1Xbin+RCFqhJpo1NmYv+eOKNxYXVE/I9jofwx4ZCYYolWbRG825mrfI0qMB287X8D/IADxyTsX7lS372oeFGhl54ed7Hila0ybNZvybsj4A3vaW+Cu8/6T93MD483crk16Rptu3SFslqjNXGB6In245fNTu9ufCNYHfoP5k15r1XyXlGJ4zlZk2z3inREBLO/CnYXzG10qmHQDvPPh4/qW41WTnHWeR3le7KNN1fzbUqSfz/jIbEeVcykf5gfhnYje23VnSdFeKoOaMgdZfx/INO71HW3G/haaRlF0Y3Ke4Z2sO9OXlz1W5rnQaf9PN5C4SAm1Hz+0tY99n2NqJMTdQ6jIemth0tP6CCk7z7oXRbzsSAyA6swC+Hjwmk4fwbpLtJY+nFpo+YuUSdfYv3c9xQe4kWoNs8WSr11ddHvB4aGzutqGVwLiim8gURiOVhofy/QPtPl+x3ESnZ6X/js9BE1tJ90vhV3sWGxmCb3/2EoFCKNXHU0rNM0peaikYuviQ8/joqefMVO/VFOsr7jv72NC//cX3T1PZD1uyRvNfLq3qM1eXl7O4dspbNrVsjTs534piQm0G4dCtY45kDHCNqt81dhjCphti3blOYN+z70vjHNfyUlfbM7/dAOX2vCje7dmNR1zLPC7QlMl/PYSM0hOZ6C/MBemLpj+2fjjP0bZH+0DV7r5v6ZtsrQdCywIOIOztVb19uSctMce+viXdYld5SuVdbl5/wUNA9WpRrC63QAAAABJRU5ErkJggg==
// @grant       none
// @version     3.8
// @author      abe
// @require     https://cdn.jsdelivr.net/npm/obs-websocket-js@5/dist/obs-ws.min.js
// SECURITY: keep the _light build — it omits lottie's expression evaluator (Function), and animation JSON here is untrusted chat-supplied data.
// @require     https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie_light.min.js
// @description Roll20 interface tweaks for the presenter side (the person recording the video) to improve the viewer's experience
// ==/UserScript==

(function () {
  'use strict';

  const SCRIPT_VERSION = '3.8';   // keep in sync with @version above

  // ── CSS ──────────────────────────────────────────────────────────────────
  const css = `
    .message.system {
      display: none;
    }
    #avatarContainer {
      display: none;
    }
    #vm-master-toolbar {
      display: none;
    }
    #vm-turn-order {
      display: none;
    }
    .parentContainer {
      display: none !important;
    }
    #sidebarcontrol {
      opacity: 0.01;
    }
    #r20-chat-overlay .tstamp {
      display: none;
    }

    #r20-chat-overlay .sheet-rolltemplate-atk,
    #r20-chat-overlay .sheet-rolltemplate-simple,
    #r20-chat-overlay .sheet-rolltemplate-dmg  {
      width: min(100%, calc(27rem * var(--message-font-size)));
      /*! height: 400px; */
      margin: 0 auto;
    }
    #r20-chat-overlay .sheet-result,
    #r20-chat-overlay .sheet-desc span {
      font-size: calc(2rem * var(--message-font-size));
      line-height: 1;
    }
    #r20-chat-overlay .sheet-desc span span {
      margin-top: calc(1rem * var(--message-font-size));
      font-size: 1.4em;
    }
    #r20-chat-overlay .sheet-sublabel span {
      font-size: calc(1rem * var(--message-font-size));
    }
    #r20-chat-overlay .sheet-label {
      margin: calc(0.5rem * var(--message-font-size));
    }
    #r20-chat-overlay .sheet-label span,
    #r20-chat-overlay .sheet-savedc span,
    #r20-chat-overlay .sheet-desc .sheet-sublabel,
    #r20-chat-overlay .sheet-solo .sheet-sublabel {
      line-height: 1;
      font-size: calc(1.5rem * var(--message-font-size));
      color: black;
    }

    #r20-chat-overlay .sheet-spelldesc-link {
      opacity: 0;
    }

    #r20-chat-overlay .sheet-container,
    #r20-chat-overlay .sheet-desc,
    #r20-chat-overlay .sheet-save {
      background-size: 100% 100%;
    }

    #r20-chat-overlay .sheet-rolltemplate-spell,
    #r20-chat-overlay .sheet-rolltemplate-spelloutput {
      display: flex;
    }
    #r20-chat-overlay .sheet-rolltemplate-spell .sheet-container,
    #r20-chat-overlay .sheet-rolltemplate-spelloutput .sheet-container {
      margin-left: 0;
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    #r20-chat-overlay .sheet-container .sheet-title,
    #r20-chat-overlay .sheet-container .sheet-italics,
    #r20-chat-overlay .sheet-container .sheet-spellsavedc,
    #r20-chat-overlay .sheet-container .sheet-row:nth-child(2) {
      flex-basis: 100%;
    }
    #r20-chat-overlay .sheet-container .sheet-row {
      font-size: 90%;
    }
    #r20-chat-overlay .sheet-container .sheet-row.sheet-desconly {
      display: none;
    }
    #r20-chat-overlay .sheet-container .sheet-spacer {
      display: none;
    }
    #r20-chat-overlay .message.general .by {
      margin-right: 1rem;
    }
    .initiativedialog {
      display: none !important;
    }

    /* ── STICKERS / CHAT IMAGES ── */
    .r20-sticker {
      position: fixed;
      z-index: 10000;
      pointer-events: none;
      transform: translate(-50%, -50%);
      /* slot redistribution happens with a smooth transition */
      transition: left 0.6s cubic-bezier(0.3, 1.15, 0.4, 1), top 0.6s cubic-bezier(0.3, 1.15, 0.4, 1);
    }
    .r20-sticker .r20-sticker-pop {
      position: relative;
      /* The "resting" rotation lives here, not only in the entry animation's fill:
         that way when the exit animation starts there's no snap back to 0°. */
      transform: rotate(var(--stk-rot, 0deg));
    }
    .r20-sticker .r20-sticker-burst {
      position: absolute;
      inset: -18%;
      border-radius: 50%;
      background: radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0) 72%);
      animation: r20-burst 0.7s ease-out both;
    }
    .r20-sticker img {
      display: block;
      position: relative;
      transition: max-width 0.6s ease, max-height 0.6s ease;
    }
    .r20-sticker .r20-lottie { transition: width 0.6s ease, height 0.6s ease; }
    .r20-sticker .r20-lottie svg { display: block; }
    /* PNG & co. (transparency): glow that follows the outline */
    .r20-sticker.png img {
      filter: drop-shadow(0 0 16px rgba(255,255,255,0.35)) drop-shadow(0 16px 28px rgba(0,0,0,0.55));
    }
    /* Photos (JPEG etc.): polaroid style */
    .r20-sticker.photo img {
      border: 10px solid #fff;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 18px 48px rgba(0,0,0,0.65);
    }

    /* Entry animations (STK.animIn: random | slam | drop | spin) */
    .r20-sticker.in-slam .r20-sticker-pop {
      animation: r20-in-slam 0.55s cubic-bezier(0.2, 1.4, 0.4, 1) both;
    }
    .r20-sticker.in-drop .r20-sticker-pop {
      animation: r20-in-drop 0.7s cubic-bezier(0.5, 0, 0.5, 1) both;
    }
    .r20-sticker.in-drop .r20-sticker-burst {
      animation-delay: 0.4s; /* the flash triggers on landing, not on departure */
    }
    .r20-sticker.in-spin .r20-sticker-pop {
      animation: r20-in-spin 0.6s cubic-bezier(0.2, 1.2, 0.4, 1) both;
    }
    /* Exit animations (STK.animOut: random | fly | fall | fade) — after the entry ones, so they take precedence */
    .r20-sticker.out-fly .r20-sticker-pop {
      animation: r20-out-fly 0.5s ease-in both;
    }
    .r20-sticker.out-fall .r20-sticker-pop {
      animation: r20-out-fall 0.6s cubic-bezier(0.5, 0, 0.9, 0.4) both;
    }
    .r20-sticker.out-fade .r20-sticker-pop {
      animation: r20-out-fade 0.5s ease both;
    }

    @keyframes r20-in-slam {
      0%   { transform: scale(0.1) rotate(-20deg); opacity: 0; }
      55%  { transform: scale(1.14) rotate(5deg); opacity: 1; }
      78%  { transform: scale(0.95) rotate(calc(var(--stk-rot, 0deg) - 2deg)); }
      100% { transform: scale(1) rotate(var(--stk-rot, 0deg)); opacity: 1; }
    }
    @keyframes r20-in-drop {
      0%   { transform: translateY(-120vh) rotate(-14deg); }
      50%  { transform: translateY(0) rotate(var(--stk-rot, 0deg)); }
      70%  { transform: translateY(-4%) rotate(var(--stk-rot, 0deg)); }
      100% { transform: translateY(0) rotate(var(--stk-rot, 0deg)); }
    }
    @keyframes r20-in-spin {
      0%   { transform: scale(0.05) rotate(-540deg); opacity: 0; }
      100% { transform: scale(1) rotate(var(--stk-rot, 0deg)); opacity: 1; }
    }
    @keyframes r20-out-fly {
      to { transform: scale(0.55) rotate(calc(var(--stk-rot, 0deg) + 12deg)) translateY(-30px); opacity: 0; }
    }
    @keyframes r20-out-fall {
      to { transform: translateY(120vh) rotate(calc(var(--stk-rot, 0deg) + 24deg)); }
    }
    @keyframes r20-out-fade {
      to { transform: scale(0.92) rotate(var(--stk-rot, 0deg)); opacity: 0; }
    }
    @keyframes r20-burst {
      from { transform: scale(0.3); opacity: 0.9; }
      to   { transform: scale(1.5); opacity: 0; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── WINDOW SIZE ────────────────────────────────────────────────────────────
  // Sizes the window to match the OBS canvas. Browsers only honour resizeTo() on
  // windows opened by script (window.open) that hold a single tab; in a normal tab
  // the call is silently ignored, which is harmless.
  // resizeTo() sets the OUTER window size, so with matchContent we add the browser
  // chrome (outer minus inner) to land the *content area* on the target instead.
  // Sizes are CSS px: on a Retina display OBS captures width x devicePixelRatio
  // pixels, so halve the target if you want 1920x1080 *captured* pixels at DPR 2.
  // Runtime tuning: window.__windowSizeCfg — re-apply with window.__resizeWindowNow()
  const WIN = {
    enabled: true,
    width: 1920,
    height: 1080,
    matchContent: true, // false = literal resizeTo(width, height), chrome included
  };
  window.__windowSizeCfg = WIN;

  function applyWindowSize() {
    if (!WIN.enabled) return;
    try {
      const chromeW = WIN.matchContent ? Math.max(0, window.outerWidth - window.innerWidth) : 0;
      const chromeH = WIN.matchContent ? Math.max(0, window.outerHeight - window.innerHeight) : 0;
      window.resizeTo(WIN.width + chromeW, WIN.height + chromeH);
      setTimeout(() => {
        console.log('[Roll20 Custom UI] window resize → content ' +
          window.innerWidth + 'x' + window.innerHeight + ' CSS (DPR ' + (window.devicePixelRatio || 1) + ')');
      }, 100);
    } catch (e) {
      console.warn('[Roll20 Custom UI] window resize refused (normal tab?):', e);
    }
  }
  window.__resizeWindowNow = applyWindowSize;
  applyWindowSize();

  // ── BLOCK SELECTION OF CONTROLLABLE TOKENS ─────────────────────────────────
  function blockSelectOnControllableTokens() {
    const scene = window.MeshScene;
    if (!scene) {
      setTimeout(blockSelectOnControllableTokens, 500);
      return;
    }

    const canvas = document.getElementById('babylonCanvas');
    if (!canvas) {
      setTimeout(blockSelectOnControllableTokens, 500);
      return;
    }

    canvas.addEventListener('pointerdown', function (e) {
      if (e.button === 1) return;

      const pickResult = scene.pick(e.offsetX, e.offsetY);
      if (!pickResult?.hit) return;

      const mesh = pickResult.pickedMesh;
      if (!mesh) return;

      if (!mesh.name.startsWith('image-instance--')) return;

      // The value is undefined but the key exists — use has() not get()
      if (!mesh.metadata?.pickableIds?.has('selectable')) return;

      e.stopImmediatePropagation();
      e.preventDefault();

    }, true);

    console.log('[Roll20 Custom UI] Token-selection block active.');
  }

  blockSelectOnControllableTokens();

  // ── CHAT MESSAGE OVERLAY ────────────────────────────────────────────────

  function initChatOverlay() {
    const chatContent = document.querySelector('#textchat .content');
    if (!chatContent) {
      setTimeout(initChatOverlay, 500);
      return;
    }

    let fadeTimer = null;
    let truncateTimer = null;
    let messageCount = 0;
    let pause = false;

    function getFontSize(count) {
      if (count === 1) return '2';
      if (count === 2) return '1.6';
      if (count === 3) return '1.3';
      return '1.1';
    }

    // Overlay container
    const overlay = document.createElement('div');
    overlay.id = 'r20-chat-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      pointer-events: none;
      width: 90vw;
      max-height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      transition: opacity 2.5s ease;
      opacity: 0;
      scrollbar-width: none;
        --message-font-size: ${getFontSize(messageCount)};
    `;
    document.body.appendChild(overlay);

    // ── SAFE AREA DIV ───────────────────────────────────────────────────────
    const safeArea = document.createElement('div');
    safeArea.id = 'r20-safe-area';
    safeArea.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.55);
      pointer-events: none;
      z-index: 9998;
      transition: width 0.5s ease, height 0.5s ease, opacity 0.5s ease, margin-left 0.5s ease;
      opacity: 0;
    `;
    document.body.appendChild(safeArea);

    function updateSafeArea(sceneName) {
      switch (sceneName) {
        case SCENE_BASE:
          safeArea.style.width = '100%';
          safeArea.style.height = '33.5%';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '0';
          break;
        case SCENE_MED:
          safeArea.style.width = '68%';
          safeArea.style.height = '23%';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '16%';
          break;
        case SCENE_TALL:
        default:
          safeArea.style.width = '68%';
          safeArea.style.height = '0';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '16%';
          break;
      }
    }

    function refreshFontSizes() {
      const messages = overlay.querySelectorAll('.overlay-message');
      const count = messages.length;
      overlay.style.setProperty('--message-font-size', getFontSize(count));
    }

    function showMessage(msgEl) {
      messageCount++;

      const clone = msgEl.cloneNode(true);
      clone.classList.add('overlay-message');
      clone.style.cssText = `
        background: rgba(0, 0, 0, 0.82);
        color: #fff;
        padding: 20px 32px;
        border-radius: 12px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        word-break: break-word;
        box-shadow: 0 6px 32px rgba(0,0,0,0.6);
        flex-shrink: 0;
        font-size: calc(0.8rem * var(--message-font-size));
      `;
      overlay.appendChild(clone);

      // Scroll down to show the most recent message
      overlay.scrollTop = overlay.scrollHeight;

      // Update the size of all messages
      refreshFontSizes();
      checkOverlayHeight();

      // Make it visible
      overlay.style.opacity = '1';

      // (Re)arm the disappearance countdown
      armOverlayTimers();
    }

    // (Re)starts the message disappearance countdown. It does NOT start if we're
    // paused or if there's a sticker on screen: in that case it will restart from scratch (full 8s)
    // when the last sticker leaves (see dismissSticker).
    function armOverlayTimers() {
      if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }
      if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
      if (pause || liveStickers.length || !messageCount) return;
      fadeTimer = setTimeout(() => {
        overlay.style.opacity = '0';
        truncateTimer = setTimeout(() => {
          overlay.innerHTML = '';
          messageCount = 0;
          obsSetScene(SCENE_BASE);
        }, 2600);
      }, 8000);
    }

    // ── STICKERS / CHAT IMAGES ────────────────────────────────────────────────
    // Images sent in chat appear centered with a "sticker" effect:
    // impact flash, bouncy rotated entry, outline glow (PNG),
    // floating. Photos (JPEG) instead get a polaroid style.
    const STK = {
      durationMs: 12000,  // time on screen before exiting
      maxConcurrent: 3,   // max visible stickers (the oldest one is removed)
      widthFrac: 0.86,    // max width: fraction of the available horizontal slot
      heightFrac: 0.9,    // max height: fraction of screen height
      maxUpscale: 2,      // never upscale beyond N times the native resolution
      animIn: 'random',   // entry: 'random' | 'slam' | 'drop' | 'spin'
      animOut: 'random',  // exit: 'random' | 'fly' | 'fall' | 'fade'
    };
    window.__stickerCfg = STK;
    const liveStickers = [];

    // Formats with transparency → sticker style; everything else → photo style
    function isStickerish(src) {
      const p = (src.split('?')[0] || '').toLowerCase();
      return /\.(png|gif|webp|avif)$/.test(p);
    }

    // The message's "real" images: excludes sender avatar and roll templates
    function chatImagesOf(node) {
      return [...node.querySelectorAll('img')].filter(img => {
        if (!img.getAttribute('src') || img.src.startsWith('data:')) return false;
        if (img.closest('.avatar')) return false;
        if (img.closest('[class*="sheet-"]')) return false;
        return true;
      });
    }

    const ANIM_IN = ['slam', 'drop', 'spin'];
    const ANIM_OUT = ['fly', 'fall', 'fade'];
    function pickAnim(pool, want) {
      return pool.includes(want) ? want : pool[Math.floor(Math.random() * pool.length)];
    }

    // With a sticker on screen we switch to the "Map" scene (SCENE_TALL, no safe area):
    // all the space is for the image. When the last one leaves, we go back to the previous scene.
    let stickerPrevScene = null;
    function enterStickerScene() {
      try {
        if (currentObsScene !== SCENE_TALL) {
          if (stickerPrevScene == null) stickerPrevScene = currentObsScene;
          obsSetScene(SCENE_TALL, true);
        }
      } catch (e) {} // OBS not configured: stickers still work
    }
    function exitStickerScene() {
      try {
        if (stickerPrevScene != null && currentObsScene === SCENE_TALL) obsSetScene(stickerPrevScene, true);
      } catch (e) {}
      stickerPrevScene = null;
    }

    // Distributes stickers into equally spaced horizontal slots, without overlaps.
    // CSS transitions on left/top and max-width/height make the movement smooth.
    function relayoutStickers() {
      const n = liveStickers.length;
      if (!n) return;
      const vw = window.innerWidth, vh = window.innerHeight;
      liveStickers.forEach((s, i) => {
        const slotW = (vw / n) * STK.widthFrac;
        const maxH = vh * STK.heightFrac;
        if (s.vector) {
          // Vector stickers have no upscale limit: fill the slot, keep ratio.
          const ratio = s.nw / s.nh;
          const w = Math.min(slotW, maxH * ratio);
          s.img.style.width = w + 'px';
          s.img.style.height = (w / ratio) + 'px';
        } else {
          s.img.style.maxWidth = Math.min(slotW, (s.nw || slotW) * STK.maxUpscale) + 'px';
          s.img.style.maxHeight = Math.min(maxH, (s.nh || maxH) * STK.maxUpscale) + 'px';
        }
        s.holder.style.left = (vw * (i + 1) / (n + 1)) + 'px';
        // with multiple stickers, slight alternating vertical offset ("collage" effect)
        s.holder.style.top = (vh * (n > 1 ? 0.5 + (i % 2 ? 0.04 : -0.04) : 0.5)) + 'px';
      });
    }

    function dismissSticker(entry, fast) {
      if (entry.dead) return;
      entry.dead = true;
      clearTimeout(entry.tOut);
      const i = liveStickers.indexOf(entry);
      if (i >= 0) liveStickers.splice(i, 1);
      entry.holder.classList.add('out-' + pickAnim(ANIM_OUT, STK.animOut));
      setTimeout(() => {
        if (entry.player) { entry.player.destroy(); entry.player = null; }
        entry.holder.remove();
      }, fast ? 250 : 700);
      relayoutStickers();                          // the others redistribute
      if (!liveStickers.length) {
        exitStickerScene();
        armOverlayTimers();   // the text-message countdown restarts only now
      }
    }

    // Animated stickers: "<base>.lottie.png" in chat means a Lottie JSON
    // lives next to it as "<base>.lottie.json" (same rule as the picker).
    function lottieJsonUrlFor(url) {
      const m = url.match(/^([^?#]*)\.lottie\.png([?#].*)?$/i);
      return m ? m[1] + '.lottie.json' + (m[2] || '') : null;
    }

    function showSticker(src) {
      const jsonUrl = lottieJsonUrlFor(src);
      if (jsonUrl) showLottieSticker(src, jsonUrl); else showImageSticker(src);
    }

    // Fetches the Lottie JSON (its host must send open CORS). Any failure
    // falls back to the static PNG — the same thing the players see in chat.
    function showLottieSticker(src, jsonUrl) {
      fetch(jsonUrl)
        .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(data => mountLottieSticker(src, data))
        .catch(err => {
          console.warn('[Roll20 Custom UI] Lottie unavailable (' + err.message + '), showing the static preview.');
          showImageSticker(src);
        });
    }

    function mountLottieSticker(src, data) {
      if (typeof lottie === 'undefined') throw new Error('lottie-web not loaded');
      const holder = document.createElement('div');
      holder.className = 'r20-sticker png in-' + pickAnim(ANIM_IN, STK.animIn);
      const rot = (Math.random() * 2 - 1) * 7;
      holder.style.setProperty('--stk-rot', rot.toFixed(1) + 'deg');
      const pop = document.createElement('div');
      pop.className = 'r20-sticker-pop';
      const burst = document.createElement('div');
      burst.className = 'r20-sticker-burst';
      pop.appendChild(burst);
      const box = document.createElement('div');
      box.className = 'r20-lottie';
      const entry = { holder, img: box, tOut: null, dead: false, vector: true, nw: data.w || 512, nh: data.h || 512, player: null };
      while (liveStickers.length >= STK.maxConcurrent) dismissSticker(liveStickers[0], true);
      enterStickerScene();
      const vw = window.innerWidth, vh = window.innerHeight;
      const ratio = entry.nw / entry.nh;
      const w = Math.min(vw * STK.widthFrac, vh * STK.heightFrac * ratio);
      box.style.width = w + 'px';
      box.style.height = (w / ratio) + 'px';
      holder.style.left = (vw / 2) + 'px';
      holder.style.top = (vh / 2) + 'px';
      pop.appendChild(box);
      holder.appendChild(pop);
      document.body.appendChild(holder);
      liveStickers.push(entry);
      armOverlayTimers();
      setTimeout(relayoutStickers, 700);
      if (!pause) entry.tOut = setTimeout(() => dismissSticker(entry), STK.durationMs);
      try {
        entry.player = lottie.loadAnimation({ container: box, renderer: 'svg', loop: true, autoplay: true, animationData: data });
      } catch (e) {
        dismissSticker(entry, true);   // unmount the ghost before falling back
        throw e;
      }
      if (pause) entry.player.pause();
    }

    function showImageSticker(src) {
      const sticker = isStickerish(src);
      const holder = document.createElement('div');
      holder.className = 'r20-sticker ' + (sticker ? 'png' : 'photo') + ' in-' + pickAnim(ANIM_IN, STK.animIn);
      // random tilt, stronger for stickers
      const rot = (Math.random() * 2 - 1) * (sticker ? 7 : 3);
      holder.style.setProperty('--stk-rot', rot.toFixed(1) + 'deg');
      const pop = document.createElement('div');
      pop.className = 'r20-sticker-pop';
      if (sticker) {
        const burst = document.createElement('div');
        burst.className = 'r20-sticker-burst';
        pop.appendChild(burst);
      }
      const img = document.createElement('img');
      const entry = { holder, img, tOut: null, dead: false, nw: 0, nh: 0 };

      img.onload = () => {
        if (entry.dead) return;
        while (liveStickers.length >= STK.maxConcurrent) dismissSticker(liveStickers[0], true);
        enterStickerScene();
        entry.nw = img.naturalWidth;
        entry.nh = img.naturalHeight;
        const vw = window.innerWidth, vh = window.innerHeight;
        img.style.maxWidth = Math.min(vw * STK.widthFrac, (entry.nw || vw) * STK.maxUpscale) + 'px';
        img.style.maxHeight = Math.min(vh * STK.heightFrac, (entry.nh || vh) * STK.maxUpscale) + 'px';
        // enters at the center of the screen; then the redistribution arranges everyone into slots
        holder.style.left = (vw / 2) + 'px';
        holder.style.top = (vh / 2) + 'px';
        document.body.appendChild(holder);
        liveStickers.push(entry);
        armOverlayTimers();                        // freezes the text-message countdown
        setTimeout(relayoutStickers, 700);         // after the entry animation
        if (!pause) entry.tOut = setTimeout(() => dismissSticker(entry), STK.durationMs);
      };
      img.onerror = () => { entry.dead = true; holder.remove(); };

      pop.appendChild(img);
      holder.appendChild(pop);
      img.src = src;
    }

    // ── KEYBOARD SHORTCUTS ───────────────────────────────────────────────────
    document.addEventListener('keydown', function (e) {
      // Cmd + Ctrl + P → Pause (cancels the timers, the overlay stays visible)
      if (e.metaKey && e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }
        if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
        liveStickers.forEach(s => clearTimeout(s.tOut));   // also freezes the stickers
        liveStickers.forEach(s => { if (s.player) s.player.pause(); });
        overlay.style.opacity = '1';
        pause = true;
        console.log('[Roll20 Custom UI] Overlay paused.');
      }

      // Cmd + Ctrl + O → Clear (hides and empties the overlay)
      if (e.metaKey && e.ctrlKey && e.key === 'o') {
        e.preventDefault();
        [...liveStickers].forEach(s => dismissSticker(s, true));  // stickers first (re-arms the timers)…
        if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }  // …then reset the timers
        if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.innerHTML = '';
          messageCount = 0;
          obsSetScene(SCENE_BASE);
        }, 2600);
        pause = false;
        console.log('[Roll20 Custom UI] Overlay cleared.');
      }

      // Cmd + Ctrl + 1 → Main scene
      if (e.metaKey && e.ctrlKey && e.key === '1') {
        e.preventDefault();
        obsSetScene(SCENE_MED, true);
      }

      // Cmd + Ctrl + 2 → Meet full width scene
      if (e.metaKey && e.ctrlKey && e.key === '2') {
        e.preventDefault();
        obsSetScene(SCENE_BASE, true);
      }

      // Cmd + Ctrl + 4 → Map scene
      if (e.metaKey && e.ctrlKey && e.key === '4') {
        e.preventDefault();
        obsSetScene(SCENE_TALL, true);
      }
    });

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1 && node.classList.contains('message')) {
            if (node.classList.contains('system')) continue;
            const imgs = chatImagesOf(node);
            if (!imgs.length) { showMessage(node); continue; }

            // Images become stickers…
            imgs.slice(0, STK.maxConcurrent).forEach(im => showSticker(im.src));

            // …and in the text box show only any remaining text.
            const textClone = node.cloneNode(true);
            chatImagesOf(textClone).forEach(i => (i.closest('a') || i).remove());
            const probe = textClone.cloneNode(true);
            probe.querySelectorAll('.avatar, .tstamp, .by').forEach(el => el.remove());
            if (probe.textContent.trim()) showMessage(textClone);
          }
        }
      }
    });

    observer.observe(chatContent, { childList: true });
    console.log('[Roll20 Custom UI] Chat overlay active.');

    // ── OBS WEBSOCKET ─────────────────────────────────────────────────────────
    // Check whether the password is saved in localStorage, otherwise ask the user for it
    const OBS_PASSWORD_KEY = 'r20custom.obs.websocket.password';
    let savedObsPassword = localStorage.getItem(OBS_PASSWORD_KEY);

    if (!savedObsPassword) {
      savedObsPassword = window.prompt('Enter the OBS WebSocket password:')?.trim() || '';
      if (savedObsPassword) {
        localStorage.setItem(OBS_PASSWORD_KEY, savedObsPassword);
      }
    }

    if (!savedObsPassword) {
      console.warn('[Roll20 Custom UI] OBS password not provided: connection disabled.');
      return;
    }

    const OBS_WS = 'ws://localhost:4455';
    const OBS_PASSWORD = savedObsPassword;
    const SCENE_BASE = 'Meet full width';
    const SCENE_MED  = 'Main';          // overlay > 66% of screen height
    const SCENE_TALL = 'Map';           // overlay > 75% of screen height

    const obs = new OBSWebSocket();
    let obsConnected = false;
    let currentObsScene = SCENE_BASE;

    let obsReconnecting = false;

    async function obsConnect() {
      if (obsReconnecting) return; // ← avoid overlapping calls
      obsReconnecting = true;
      try {
        await obs.connect(OBS_WS, OBS_PASSWORD);
        obsConnected = true;
        obsReconnecting = false;
        const { currentProgramSceneName } = await obs.call('GetCurrentProgramScene');
        currentObsScene = currentProgramSceneName;
        updateSafeArea(currentObsScene);
        console.log(`[Roll20 Custom UI] OBS connected. Active scene: ${currentObsScene}`);
      } catch (err) {
        obsConnected = false;
        obsReconnecting = false;
        console.warn('[Roll20 Custom UI] OBS unreachable, retrying in 10s.');
        setTimeout(obsConnect, 10000);
      }
    }

    // Keep currentObsScene in sync if the scene is changed manually in OBS
    obs.on('CurrentProgramSceneChanged', ({ sceneName }) => {
      currentObsScene = sceneName;
      updateSafeArea(sceneName);
      console.log(`[Roll20 Custom UI] Scene changed externally → ${sceneName}`);
    });

    obs.on('ConnectionClosed', () => {
      obsConnected = false;
      if (!obsReconnecting) { // ← avoid scheduling if already in progress
        console.warn('[Roll20 Custom UI] OBS disconnected, retrying in 10s.');
        setTimeout(obsConnect, 10000);
      }
    });

    async function obsSetScene(sceneName, force) {
      // with a sticker on screen the scene stays "Map": ignore automatic changes (not forced ones)
      if (!force && liveStickers.length && sceneName !== SCENE_TALL) return;
      if (!obsConnected || sceneName === currentObsScene) return;
      try {
        await obs.call('SetCurrentProgramScene', { sceneName });
        currentObsScene = sceneName;
        updateSafeArea(sceneName);
        console.log(`[Roll20 Custom UI] OBS → ${sceneName}`);
      } catch (err) {
        console.warn('[Roll20 Custom UI] Error changing OBS scene:', err);
      }
    }

    function checkOverlayHeight() {
      if (!obsConnected) return;
      const overlayHeight = overlay.scrollHeight;
      const screenHeight = window.innerHeight;
      const ratio = overlayHeight / screenHeight;

      if (ratio >= (window.tall_limit || 0.55)) {
        obsSetScene(SCENE_TALL);
      } else if (ratio >= (window.med_limit || 0.35)) {
        obsSetScene(SCENE_MED);
      } else if (parseFloat(overlay.style.opacity) > 0) {
        //obsSetScene(SCENE_MED); // overlay visible but small
      } else {
        obsSetScene(SCENE_BASE);
      }
    }

    obsConnect();

  }

  initChatOverlay();

    // ── CAMERA FOLLOW ──────────────────────────────────────────────────────────
  // Follows the token that moves, if controllable by the player (selectable mesh
  // + rendered → excludes GM-layer/hidden ones). Moves the view by SCROLLING the
  // native Roll20 wrapper (#vtt-scroll-wrapper), so map, tokens, fog, darkness and
  // HP bars stay aligned. Do NOT use cam-transform: it only moves map+tokens.
  // Toggle on/off: Cmd + Ctrl + B.   Runtime tuning: window.__cameraFollowCfg
  function initCameraFollow() {
    const scene = window.MeshScene;
    if (!scene) { setTimeout(initCameraFollow, 500); return; }
    const camTransform = (scene.transformNodes || []).find(n => n.name === 'cam-transform');
    const scroller = document.getElementById('vtt-scroll-wrapper');
    const canvas = scene.getEngine && scene.getEngine().getRenderingCanvas();
    if (!camTransform || !scroller || !canvas) { setTimeout(initCameraFollow, 500); return; }

    const CFG = {
      enabled: true,      // enable/disable follow (toggle: Cmd+Ctrl+B)
      lerp: 0.08,         // smoothness: fraction of the error corrected each frame
      maxSpeedPx: 14,     // px/frame speed cap → constant "cruise" on long pans (0 = uncapped)
      aimAtDestination: true, // aim at the token's DROP POINT (Backbone model), not its gliding mesh
      deadzonePx: 250,    // px from centre within which NOT to follow (0 = always centre)
      minMovePx: 2,       // px: ignore errors below this threshold (anti-jitter)
      moveEpsilon: 3,     // world-units: threshold to consider a token "moving"
      releaseMs: 700,     // ms of token stillness after which it RELEASES (once the camera has arrived)
      releaseHardMs: 6000,// hard release timeout: give up even if never "arrived" (e.g. token at map edge)
      manualPanPx: 6,     // px: if you pan by hand more than this, the camera yields immediately (Infinity to disable)
      honorSafeArea: true,// center in the area ABOVE the safe area (OBS band at the bottom), not screen-center
      verticalOffsetPx: 0,// extra vertical tweak in px (negative = higher up)
      debug: false,       // logs the follow error to the console
    };
    window.__cameraFollowCfg = CFG;

    let targetMesh = null;        // the mesh currently being followed
    let pinnedPoint = null;       // {x,y} world point (saved viewpoint) followed instead of a mesh
    let lastMoveT = 0;            // timestamp (ms) of the last detected token movement
    let expScrollL = scroller.scrollLeft, expScrollT = scroller.scrollTop; // scroll "expected" as left by us
    const lastPos = new Map();    // mesh.uniqueId -> {x, y} world position from the previous frame
    let cinema = null;            // {fx, fy, t0, dur}: eased approach to an explicit framing
    let explicitAim = false;      // true when WE aimed the camera, rather than a token moving

    // Ease an explicit framing (a token chip, a turn, a viewpoint) instead of letting
    // the follow loop's exponential decay do it: that is right for tracking a token
    // live, but as a deliberate camera move it lunges off the mark and then crawls.
    // smoothstep accelerates away and settles. The loop keeps aiming at the CURRENT
    // target every frame, so a token that moves mid-approach is still handled.
    function startCinema(tx, ty) {
      const c = viewportCenter();
      const from = screenToWorld(c.x, c.y);
      const cam = scene.activeCamera;
      const wpp = (cam.orthoRight - cam.orthoLeft) / canvas.clientWidth;
      const dist = Math.hypot(tx - from.x, ty - from.y) / wpp;
      if (dist < CFG.minMovePx) { cinema = null; return; }
      cinema = { fx: from.x, fy: from.y, t0: performance.now(),
                 dur: Math.max(500, Math.min(2200, 450 + dist * 0.5)) };
    }

    // Any RENDERED token, player-controlled or not. selectableTokens() is deliberately
    // narrower — it drives auto-follow, which should only react to the players' own
    // moves — but an EXPLICIT framing (chip, digit, turn) must reach NPCs too, which
    // is the whole point of having them in the list. isEnabled() still excludes
    // GM-layer and hidden tokens, so this cannot be used to find something unseen.
    function renderedToken(id) {
      const m = (scene.meshes || []).find(o => o.name === 'image-instance-' + id);
      return (m && (!m.isEnabled || m.isEnabled())) ? m : null;
    }

    function selectableTokens() {
      return scene.meshes.filter(m => {
        if (!m.name || !m.name.startsWith('image-instance--')) return false;
        if (m.isEnabled && !m.isEnabled()) return false;       // gm-layer/hidden ones not rendered
        const p = m.metadata && m.metadata.pickableIds;
        try { return !!(p && p.has && p.has('selectable')); } catch (e) { return false; }
      });
    }

    // Projects a world point into the canvas's screen coordinates (px) (current camera = current scroll).
    function worldToScreen(wx, wy) {
      const cam = scene.activeCamera;
      const u = (wx - (camTransform.position.x + cam.orthoLeft)) / (cam.orthoRight - cam.orthoLeft);
      const v = (wy - (camTransform.position.y + cam.orthoBottom)) / (cam.orthoTop - cam.orthoBottom);
      return { x: u * canvas.clientWidth, y: (1 - v) * canvas.clientHeight };
    }

    // Inverse of worldToScreen: which world point currently sits at a screen point.
    function screenToWorld(sx, sy) {
      const cam = scene.activeCamera;
      const u = sx / canvas.clientWidth;
      const v = 1 - sy / canvas.clientHeight;
      return {
        x: camTransform.position.x + cam.orthoLeft + u * (cam.orthoRight - cam.orthoLeft),
        y: camTransform.position.y + cam.orthoBottom + v * (cam.orthoTop - cam.orthoBottom),
      };
    }

    // World-space DESTINATION of a token. On drop, the Backbone model jumps straight
    // to the final point while the mesh glides there visually. Aiming the camera at the
    // model avoids the useless detour when tokens move one after another along similar
    // paths (camera did B → A1 → B1; with this it goes B → B1 directly).
    function tokenDestination(mesh) {
      try {
        const id = mesh.name.replace('image-instance-', ''); // keeps the id's leading dash
        const g = window.Campaign.activePage().thegraphics.get(id);
        if (g) return { x: g.get('left'), y: -g.get('top') }; // world.x = left, world.y = -top
      } catch (e) {}
      const a = mesh.getAbsolutePosition(); // fallback: the gliding mesh
      return { x: a.x, y: a.y };
    }

    // The "useful" center of the frame: half width, but vertically half of the area
    // ABOVE the safe area (the OBS band at the bottom), so the token doesn't end up covered/too low.
    function viewportCenter() {
      const cx = canvas.clientWidth / 2;
      let safeH = 0;
      if (CFG.honorSafeArea) {
        const safeEl = document.getElementById('r20-safe-area');
        if (safeEl) {
          const op = parseFloat(getComputedStyle(safeEl).opacity) || 0;
          if (op > 0.01) safeH = safeEl.offsetHeight || 0;
        }
      }
      const cy = (canvas.clientHeight - safeH) / 2 + (CFG.verticalOffsetPx || 0);
      return { x: cx, y: cy };
    }

    // Follow via SCROLL of the native wrapper: map, tokens, fog, darkness and HP bars move together.
    scene.onBeforeRenderObservable.add(() => {
      // 1) which token moved the most in this frame?
      let mover = null, best = CFG.moveEpsilon;
      for (const m of selectableTokens()) {
        const a = m.getAbsolutePosition();
        const prev = lastPos.get(m.uniqueId);
        lastPos.set(m.uniqueId, { x: a.x, y: a.y });
        if (!prev) continue;
        const d = Math.hypot(a.x - prev.x, a.y - prev.y);
        if (d > best) { best = d; mover = m; }
      }
      // 2) latch on when a token moves; record the moment and reset the scroll baseline.
      if (CFG.enabled && mover) {
        if (glideTimer) { clearInterval(glideTimer); glideTimer = null; }  // a real move wins
        cinema = null; explicitAim = false;   // live tracking, not a deliberate move
        targetMesh = mover;
        pinnedPoint = null;           // a real move always wins over a pinned viewpoint
        lastMoveT = performance.now();
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
      }

      // 3) if not following, manual pan is completely free.
      if (!CFG.enabled || (!targetMesh && !pinnedPoint)) {
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
        return;
      }

      // 4) MANUAL OVERRIDE: if the scroll differs from what I had left,
      //    you're panning by hand → release the token immediately.
      if (performance.now() >= suppressOverrideUntil &&
          (Math.abs(scroller.scrollLeft - expScrollL) > CFG.manualPanPx ||
           Math.abs(scroller.scrollTop  - expScrollT) > CFG.manualPanPx)) {
        targetMesh = null; pinnedPoint = null; cinema = null; explicitAim = false;
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
        return;
      }

      // 5) target point and error: aim at the drop destination (model), not the gliding mesh.
      const t = pinnedPoint ? pinnedPoint
        : (CFG.aimAtDestination
            ? tokenDestination(targetMesh)
            : (() => { const a = targetMesh.getAbsolutePosition(); return { x: a.x, y: a.y }; })());
      const c = viewportCenter();
      // The dead zone exists so the camera ignores small TOKEN movements; it must not
      // apply to a target WE chose (pan, viewpoint, token chip, turn), which would
      // otherwise stop up to deadzonePx short of the thing you asked to look at.
      const dz = (pinnedPoint || explicitAim) ? CFG.minMovePx : Math.max(CFG.minMovePx, CFG.deadzonePx);
      // Arrival is judged on the REAL target, never on the eased waypoint below:
      // otherwise the approach would look "arrived" from its first frame and the
      // release timer would drop the target halfway there.
      const sT = worldToScreen(t.x, t.y);
      const arrived = Math.hypot(sT.x - c.x, sT.y - c.y) <= dz;

      // While easing, chase a waypoint travelling the path on smoothstep instead of
      // the target itself. Re-read from t every frame, so a moving token still works.
      let aim = t;
      if (cinema) {
        const u = (performance.now() - cinema.t0) / cinema.dur;
        if (u >= 1) cinema = null;
        else {
          const e = u * u * (3 - 2 * u);
          aim = { x: cinema.fx + e * (t.x - cinema.fx), y: cinema.fy + e * (t.y - cinema.fy) };
        }
      }
      const s = worldToScreen(aim.x, aim.y);
      const ex = s.x - c.x;
      const ey = s.y - c.y;

      // 6) TIMED RELEASE: token still for releaseMs AND camera arrived → release.
      //    The camera is slower than the token now, so never cut the pan short;
      //    releaseHardMs is the safety net for unreachable targets (map edge).
      const still = performance.now() - lastMoveT;
      if (still > CFG.releaseMs && (arrived || still > CFG.releaseHardMs)) {
        targetMesh = null; pinnedPoint = null; cinema = null; explicitAim = false;
        return;
      }

      // 7) follow: scroll toward the "useful" center, capped at cruise speed.
      if (!arrived) {
        // While easing, sit ON the waypoint rather than chasing it: a lag filter would
        // trail it by roughly one frame of its speed, so the smoothstep's deceleration
        // gets spent closing that gap instead of being seen, and whatever is left over
        // is then crawled out at CFG.lerp once the ease ends. The waypoint is already
        // speed-shaped, so the cruise cap stands down too.
        const lerp = cinema ? 1 : (panLive ? 0.5 : CFG.lerp);
        const cap = (cinema || panLive) ? 0 : CFG.maxSpeedPx;
        let dx = ex * lerp;
        let dy = ey * lerp;
        const spd = Math.hypot(dx, dy);
        if (cap && spd > cap) {
          dx *= cap / spd;
          dy *= cap / spd;
        }
        scroller.scrollLeft += dx;
        scroller.scrollTop  += dy;
        if (CFG.debug) console.log('[Roll20 Custom UI] follow err', Math.round(ex), Math.round(ey));
      }
      // remember the scroll I leave behind, to distinguish manual pan next frame.
      expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
    });

    document.addEventListener('keydown', (e) => {
      if (e.metaKey && e.ctrlKey && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        CFG.enabled = !CFG.enabled;
        if (!CFG.enabled) targetMesh = null;
        console.log('[Roll20 Custom UI] Camera-follow ' + (CFG.enabled ? 'ACTIVE' : 'disabled'));
      }
    });

    // ── PUBLIC API (consumed by the control-panel window) ───────────────────
    // anchorSpan: how far outside the canvas the zoom anchor may go, in screen-fulls.
    // Verified live: Roll20 honours anchors at least 4 screens out, with no clamping.
    const CFGV = { restoreZoom: true, anchorSpan: 4, minZoom: 12 };
    // 'safe' = only tokens you control or that are already in the turn tracker.
    // 'all'  = every rendered token on the objects layer (can spoil unseen NPCs).
    const CFGT = { source: 'safe' };
    window.__tokenListCfg = CFGT;
    let zoomTimer = null;
    let glideTimer = null;
    // Zoom points Roll20 actually yields per unit of deltaY. 0.5 was measured, but it
    // is re-learned from every step: the anchor maths divides by (1 - k), so a stale
    // estimate would show up as a pan that runs fast or slow.
    let zoomYield = 0.5;
    let yieldProbe = null;
    // Zooming rescales scrollLeft/Top by a lot (Roll20 keeps the view centre fixed).
    // While that happens the manual-pan detector must stand down, otherwise it reads
    // our own zoom as 'the user grabbed the map' and drops the target we are framing.
    let suppressOverrideUntil = 0;
    let panLive = false;   // true while the pad/keys are driving: snappier, uncapped
    window.__viewpointCfg = CFGV;
    const api = window.__cameraFollow = {
      cfg: CFG,
      // Pan by a screen-px delta. Cancels any active follow, like a manual pan.
      // Pan by a screen-px delta. It does NOT write scrollLeft/Top directly: Roll20
      // recomputes scroll from its own viewport state whenever it zooms and silently
      // DISCARDS our writes (measured: a +200 px write vanished exactly). Instead we
      // move a world-anchored point and let the follow loop re-derive scroll every
      // frame, which is immune to that rescaling and lets pan and zoom coexist.
      panBy(dx, dy) {
        api.cancelGlide();
        cinema = null; explicitAim = false;   // a live drag overrides any eased approach
        const cam = scene.activeCamera;
        const wpp = (cam.orthoRight - cam.orthoLeft) / canvas.clientWidth; // world units per screen px
        if (!pinnedPoint) {
          const c = viewportCenter();
          pinnedPoint = screenToWorld(c.x, c.y);
        }
        pinnedPoint.x += dx * wpp;
        pinnedPoint.y -= dy * wpp;      // screen y grows downwards, world y upwards
        targetMesh = null;
        panLive = true;
        lastMoveT = performance.now();  // keep the loop alive while a key is held
      },
      // Frame a token by graphic id, exactly as if it had just moved: reuses the
      // follow loop, so safe-area, easing, release and manual override all apply.
      focusToken(id) {
        const mesh = renderedToken(id);
        if (!mesh) return false;
        api.cancelGlide();
        targetMesh = mesh;
        pinnedPoint = null;      // a pinned viewpoint would otherwise win in the loop
        explicitAim = true;
        const t = tokenDestination(mesh);
        startCinema(t.x, t.y);
        lastMoveT = performance.now();
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
        return true;
      },
      // Every RENDERED token on the objects layer — players AND NPCs. GM-layer and
      // hidden tokens have isEnabled() === false, so they can never leak in here.
      // Nameless props / map art are skipped unless they are player-selectable.
      listTokens() {
        let coll = null;
        try { coll = window.Campaign.activePage().thegraphics; } catch (e) {}
        // Creatures already in the turn tracker are, by definition, in play and known
        // to the table — unlike a monster sitting in the dark waiting to be discovered.
        const known = new Set();
        try {
          (JSON.parse(window.Campaign.get('turnorder') || '[]') || [])
            .forEach(e => { if (e && e.id && e.id !== '-1') known.add(e.id); });
        } catch (e) {}
        const out = [];
        (scene.meshes || []).forEach(m => {
          if (!m.name || !m.name.startsWith('image-instance--')) return;
          if (m.isEnabled && !m.isEnabled()) return;
          const id = m.name.replace('image-instance-', '');
          let g = null;
          try { g = coll && coll.get(id); } catch (e) {}
          if (!g || g.get('layer') !== 'objects') return;
          const name = (g.get('name') || '').trim();
          const pk = m.metadata && m.metadata.pickableIds;
          let player = false;
          try { player = !!(pk && pk.has && pk.has('selectable')); } catch (e) {}
          if (!name && !player) return;
          // Anti-spoiler: we cannot tell whether a token is currently lit (the fog is
          // not queryable), so we gate on knowledge instead of visibility.
          if (CFGT.source !== 'all' && !player && !known.has(id)) return;
          out.push({ id, name: name || '(unnamed)', player, inTracker: known.has(id) });
        });
        return out.sort((a, b) => (b.player - a.player) || a.name.localeCompare(b.name));
      },
      // Native zoom: click Roll20's own buttons. A zoom change must update ortho,
      // scrollWidth/Height AND scrollLeft/Top together — writing ortho directly
      // desyncs everything, exactly like panning via cam-transform did.
      zoomStep(dir) {
        const box = document.getElementById('vm_zoom_buttons');
        if (!box) return false;
        const want = dir > 0 ? 'plus' : 'minus';
        const el = [...box.querySelectorAll('*')]
          .find(e => (e.textContent || '').trim().toLowerCase() === want);
        if (!el) return false;
        el.click();
        return true;
      },
      // SMOOTH native zoom. Measured live: a synthetic Ctrl+wheel on the canvas is
      // the only path Roll20 honours, and it is CONTINUOUS (57% -> 72.1% for
      // deltaY 120), unlike the +/- buttons which snap in 10% steps. Roll20 does
      // all the bookkeeping (ortho + scroll size + scroll position) itself.
      // Negative deltaY zooms in. Zoom is centred on the safe-area-aware centre,
      // so whatever you are framing stays put.
      // Faithful replica of a REAL wheel event (captured from the physical mouse):
      // Roll20 zooms on the PLAIN wheel — no modifiers — using tiny pixel deltas
      // (deltaY 1-2, deltaMode 0), and it reads the LEGACY wheelDelta properties,
      // which are exactly -3 * deltaY. new WheelEvent() cannot set those, so they
      // must be defined on the instance before dispatch — that omission is why every
      // earlier synthetic attempt fell through to Roll20's pan branch.
      // Negative deltaY = zoom in. ~0.5 zoom points per unit of deltaY.
      // One wheel step anchored anywhere on (or off) the canvas.
      zoomAt(deltaY, sx, sy) {
        try {
          suppressOverrideUntil = performance.now() + 300;
          // Learn the real yield from the previous step: Roll20 applies a wheel event
          // a frame or so later, so we measure it on the way into the next one.
          if (yieldProbe) {
            const got = (api.zoomPercent() - yieldProbe.z) / -yieldProbe.d;
            if (isFinite(got) && got > 0.1 && got < 2) zoomYield += (got - zoomYield) * 0.2;
            yieldProbe = null;
          }
          // zoomPercent is rounded to 0.1, so only steps worth at least a point or so
          // carry a usable measurement; smaller ones would teach us the rounding error.
          const r = canvas.getBoundingClientRect();
          const ev = new WheelEvent('wheel', {
            bubbles: true, cancelable: true, deltaMode: 0,
            deltaX: 0, deltaY, deltaZ: 0,
            clientX: r.left + sx, clientY: r.top + sy,
          });
          const legacy = -deltaY * 3;
          Object.defineProperty(ev, 'wheelDelta',  { value: legacy });
          Object.defineProperty(ev, 'wheelDeltaY', { value: legacy });
          Object.defineProperty(ev, 'wheelDeltaX', { value: 0 });
          Object.defineProperty(ev, 'offsetX', { value: sx });
          Object.defineProperty(ev, 'offsetY', { value: sy });
          if (Math.abs(deltaY) >= 2) yieldProbe = { z: api.zoomPercent(), d: deltaY };
          canvas.dispatchEvent(ev);
          return true;
        } catch (e) { return false; }
      },
      zoomBy(deltaY) { const c = viewportCenter(); return api.zoomAt(deltaY, c.x, c.y); },
      // ── THE ANCHOR IS ALSO A PAN ACTUATOR ────────────────────────────────────
      // Roll20's native zoom is anchored to the POINTER: the world point under the
      // cursor stays under the cursor. Measured live and true to the pixel, and
      // honoured even for anchors 4 screens OUTSIDE the canvas — no clamping at all.
      // With k = zoomBefore / zoomAfter, one step moves the view centre by
      //     C' = W + k * (C - W)
      // so to shift the centre by a wanted screen delta we simply place the anchor at
      //     anchor = centre + delta / (1 - k)
      // The pan then falls out of Roll20's OWN bookkeeping instead of a scrollLeft
      // write, which is exactly why it can no longer be discarded mid-zoom — that
      // discarding is what made pan and zoom mutually exclusive before. Zooming out
      // gives k > 1, flipping the anchor to the other side, which the formula does
      // by itself. Authority per step is |1 - k| * anchorDistance: generous while the
      // zoom moves, nil when it is still, hence the clamp (the caller falls back to
      // scrolling once the zoom is at rest).
      zoomAnchored(deltaY, panDx, panDy) {
        const c = viewportCenter();
        let sx = c.x, sy = c.y;
        if (panDx || panDy) {
          const z = api.zoomPercent();
          const zNext = z + (-deltaY) * zoomYield;
          const k = (z > 0 && zNext > 0) ? z / zNext : 1;
          if (Math.abs(1 - k) > 1e-5) {
            const mx = CFGV.anchorSpan * canvas.clientWidth;
            const my = CFGV.anchorSpan * canvas.clientHeight;
            const rx = panDx / (1 - k), ry = panDy / (1 - k);
            // Clamp the anchor as a VECTOR. Clamping each axis on its own changes the
            // DIRECTION of the pan as soon as one of them alone hits its limit — and
            // since the canvas is wider than tall, a diagonal drifted sideways.
            const f = Math.min(1, mx / (Math.abs(rx) || 1e-9), my / (Math.abs(ry) || 1e-9));
            sx = c.x + rx * f;
            sy = c.y + ry * f;
          }
        }
        return api.zoomAt(deltaY, sx, sy);
      },
      // How much pan (screen px) a wheel step of this size can buy right now. Goes to
      // zero as the zoom slows, which is what decides who drives — see the panel loop.
      panAuthority(deltaY) {
        const z = api.zoomPercent();
        const zNext = z + (-deltaY) * zoomYield;
        if (!(z > 0) || !(zNext > 0)) return 0;
        return Math.abs(1 - z / zNext) * CFGV.anchorSpan * Math.min(canvas.clientWidth, canvas.clientHeight);
      },
      // Derived from the verified law: orthoHalfWidth = (canvasWidth/2) * (100/zoom%)
      zoomPercent() {
        try { return Math.round((canvas.clientWidth / 2) / scene.activeCamera.orthoRight * 1000) / 10; }
        catch (e) { return null; }
      },
      // Frame an arbitrary WORLD point — same machinery as focusToken, so the
      // safe-area centring, easing, release and manual override all apply.
      focusWorld(x, y) {
        pinnedPoint = { x, y };
        targetMesh = null;
        panLive = false;                // cinematic glide, not a live drag
        explicitAim = true;
        startCinema(x, y);
        lastMoveT = performance.now();
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
      },
      // Current view centre in world coords (cam-transform is a reliable READ).
      viewCentre() { return { x: camTransform.position.x, y: camTransform.position.y }; },
      // Stop following anything, so the follow loop leaves the scroll alone.
      releasePan() {
        targetMesh = null; pinnedPoint = null; panLive = false;
        cinema = null; explicitAim = false;
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
      },
      cancelGlide() { if (glideTimer) { clearInterval(glideTimer); glideTimer = null; } },
      // ── glideTo: travel and zoom as ONE continuous camera move ───────────────
      // Driven only by the zoom anchor (see zoomAnchored): not a single scrollLeft
      // write, so there is nothing left for Roll20 to discard and the old two-phase
      // "zoom, then pan" dance disappears.
      // Two ideas make it work:
      //  1. Pan progress is tied to how much ZOOM has been spent, not to elapsed time,
      //     because zoom motion is literally what buys the pan (see the note on 1/z
      //     below). The zoom itself is scheduled on smoothstep, so the move eases in
      //     and out instead of decaying exponentially the way zoomTo does.
      //  2. When the zoom change alone cannot buy the whole trip, we borrow some:
      //     widen past the target, travel on the wide leg, tighten on the way in.
      //     A crane move — the constraint turns into the look.
      // Whatever the anchor could not buy is mopped up by the ordinary scroll follow
      // at the end, which is safe again once the zoom has stopped.
      glideTo(x, y, pct, opts) {
        const o = opts || {};
        api.cancelGlide();
        api.releasePan();
        const z0 = api.zoomPercent();
        const zf = (pct && CFGV.restoreZoom) ? pct : z0;
        // No real zoom change means no anchor to exploit — and a plain scroll pan
        // already does this well. Borrowing a zoom-out just to travel would invent a
        // camera move nobody asked for, so below 2% we simply pan.
        if (!z0 || !zf || Math.abs(zf - z0) / z0 < 0.02) { api.focusWorld(x, y); return; }

        const c0s = viewportCenter();
        const C0 = screenToWorld(c0s.x, c0s.y);
        const T = { x, y };
        const wppOf = () => (scene.activeCamera.orthoRight - scene.activeCamera.orthoLeft) / canvas.clientWidth;
        const travelPx = Math.hypot(T.x - C0.x, T.y - C0.y) / wppOf();

        // Pan a zoom leg can buy: |1 - za/zb| x how far out the anchor may sit.
        const env = CFGV.anchorSpan * Math.min(canvas.clientWidth, canvas.clientHeight);
        const auth = (za, zb) => Math.abs(1 - za / zb) * env;
        const need = travelPx * 1.3;      // margin: authority thins out at both ends
        let zm = null;                    // apex of the borrowed zoom-out, if any
        if (travelPx > 4 && auth(z0, zf) < need) {
          // Widening to zm buys (z0/zm - 1) on the way out and (1 - zm/zf) on the way
          // back in. Note the asymmetry: zooming OUT has unbounded authority, zooming
          // IN can never buy more than one env. Solving z0/zm - zm/zf >= need/env for
          // zm gives the deepest useful apex.
          const N = need / env;
          zm = Math.max(CFGV.minZoom, (-N * zf + Math.sqrt(N * N * zf * zf + 4 * z0 * zf)) / 2);
          if (zm >= Math.min(z0, zf)) zm = null;   // nothing to borrow: run flat out
        }
        const L0 = Math.log(z0), Lf = Math.log(zf), Lm = zm ? Math.log(zm) : 0;
        // The zoom itself runs on log-zoom, which is what reads as an even zoom rate.
        // The PAN, though, advances on |d(1/z)|: authority per zoom step is env*|1-k|,
        // which in world units integrates to env*100*|1/za - 1/zb|. So 1/z is literally
        // the currency the pan is paid in. Scheduling the pan on log-zoom instead (the
        // obvious guess) front-loads nothing and asks the tight end of a zoom-in to
        // carry most of the trip, exactly where authority has collapsed — simulated at
        // a 1478 px shortfall on a 6x zoom-in with a long trip.
        const iv = (a, b) => Math.abs(1 / b - 1 / a);
        const V = zm ? iv(z0, zm) + iv(zm, zf) : iv(z0, zf);
        const ss = (u) => u * u * (3 - 2 * u);       // smoothstep: ease in AND out
        // Scheduled zoom at time u, and the share of the trip it has paid for.
        const sched = (u) => {
          let L, done;
          if (zm) {
            if (u < 0.5) { L = L0 + ss(u * 2) * (Lm - L0); done = iv(z0, Math.exp(L)); }
            else { L = Lm + ss((u - 0.5) * 2) * (Lf - Lm); done = iv(z0, zm) + iv(zm, Math.exp(L)); }
          } else { L = L0 + ss(u) * (Lf - L0); done = iv(z0, Math.exp(L)); }
          return { z: Math.exp(L), p: V > 1e-9 ? done / V : ss(u) };
        };

        const dur = o.durationMs || Math.max(900, Math.min(3500, 700 + travelPx * 0.6 + V * 900));
        const t0 = performance.now();
        glideTimer = setInterval(() => {
          const u = Math.min(1, (performance.now() - t0) / dur);
          const sc = sched(u);
          const wpp = wppOf();
          const cs = viewportCenter();
          const C = screenToWorld(cs.x, cs.y);
          // How far the centre still is from where the schedule wants it, in screen px.
          let px =  ((C0.x + sc.p * (T.x - C0.x)) - C.x) / wpp;
          let py = -((C0.y + sc.p * (T.y - C0.y)) - C.y) / wpp;
          // scrollTop is an integer, so the centre reading quantises. Without a dead
          // zone the loop chases that sub-pixel noise, and the anchor (which divides
          // by a tiny 1 - k) swings wildly — that was the micro-stutter in the probe.
          if (Math.abs(px) < 1.2) px = 0;
          if (Math.abs(py) < 1.2) py = 0;
          const dz = Math.max(-14, Math.min(14, -(sc.z - api.zoomPercent()) / Math.max(0.05, zoomYield)));
          // smoothstep is flat at both ends, so the first and last frames ask for no
          // zoom at all; only dispatch when there is something to do.
          if (Math.abs(dz) > 0.05 || px || py) api.zoomAnchored(dz, px * 0.6, py * 0.6);
          suppressOverrideUntil = performance.now() + 300;
          if (u >= 1) {
            api.cancelGlide();
            const c2 = viewportCenter(), C2 = screenToWorld(c2.x, c2.y);
            if (Math.hypot(T.x - C2.x, T.y - C2.y) / wppOf() > 2) api.focusWorld(T.x, T.y);
          }
        }, 16);
      },
      // Recall a saved viewpoint {x, y, zoom} as a single continuous move.
      recallView(v) {
        if (!v) return;
        if (v.zoom && CFGV.restoreZoom) api.glideTo(v.x, v.y, v.zoom);
        else api.focusWorld(v.x, v.y);
      },
      // Converge smoothly on a target zoom %. Closed loop: each tick measures the
      // remaining ratio and issues a proportional wheel delta, so the K estimate
      // below only affects how fast we get there, never whether we arrive.
      zoomTo(pct, done) {
        const finish = () => { if (done) done(); };
        if (!pct || pct <= 0) return finish();
        // Closed loop on the smooth wheel path: ~0.5 zoom points per deltaY unit,
        // so a small clamped delta each frame glides to the target. Measuring every
        // tick means the constant only affects speed, never whether we arrive.
        clearTimeout(zoomTimer);
        let guard = 240, ticks = 0;
        const startZ = api.zoomPercent();
        const tick = () => {
          const c = api.zoomPercent();
          if (c == null || guard-- <= 0) return finish();
          if (++ticks === 12 && c === startZ) {   // wheel path dead here -> native steps
            api.zoomStep(startZ < pct ? 1 : -1);
            return finish();
          }
          const err = pct - c;                     // points still to travel
          if (Math.abs(err) < 0.6) return finish();
          api.zoomBy(Math.max(-8, Math.min(8, -err * 2)));
          zoomTimer = setTimeout(tick, 16);
        };
        tick();
      },
      state() { return { enabled: CFG.enabled, following: !!(targetMesh || pinnedPoint) }; },
    };

    console.log('[Roll20 Custom UI] Camera-follow (scroll-based) initialized (toggle: Cmd+Ctrl+B).');
  }

  initCameraFollow();

  // ── CONTROL PANEL (second window) ──────────────────────────────────────────
  // Live controls in a SEPARATE browser window. OBS captures the Roll20 *window*,
  // so this panel never reaches the stream. Popup blockers require a user gesture,
  // hence it opens on a shortcut: Cmd + Ctrl + 0.
  // The panel is about:blank, so it inherits Roll20's origin and can talk to the
  // opener directly (window.opener.__cameraFollow) — no postMessage needed.
  function initControlPanel() {
    const LS_KEY = 'r20custom.panel.tokenlist';
    const LS_VIEWS = 'r20custom.panel.views';
    const LS_ALIAS = 'r20custom.panel.aliases';
    let win = null;

    const SLIDERS = [
      { key: 'deadzonePx',       label: 'Dead zone',      min: 0,   max: 600,  step: 10,   unit: 'px' },
      { key: 'lerp',             label: 'Smoothness',     min: 0.02, max: 0.4, step: 0.01, unit: '' },
      { key: 'maxSpeedPx',       label: 'Max speed',      min: 0,   max: 60,   step: 1,    unit: 'px/f' },
      { key: 'verticalOffsetPx', label: 'Vertical offset', min: -300, max: 300, step: 5,   unit: 'px' },
      { key: 'releaseMs',        label: 'Release delay',  min: 0,   max: 3000, step: 50,   unit: 'ms' },
    ];

    function panelHtml() {
      const advRows = SLIDERS.map(s =>
        '<div class="row"><label>' + s.label +
        ' <output id="out-' + s.key + '"></output></div>' +
        '<input type="range" id="sl-' + s.key + '" min="' + s.min + '" max="' + s.max +
        '" step="' + s.step + '" data-unit="' + s.unit + '"></div>').join('');

      return '<!doctype html><html><head><meta charset="utf-8"><title>Presenter panel</title><style>' +
        'body{margin:0;padding:10px;background:#15161a;color:#e9e9ee;' +
        'font:13px/1.5 ui-sans-serif,system-ui,-apple-system,sans-serif}' +
        'h2{font-size:11px;text-transform:uppercase;letter-spacing:.09em;color:#8b8b98;margin:0;font-weight:600}' +
        '.row{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}' +
        'output{color:#9ad0ff;font-variant-numeric:tabular-nums}' +
        'input[type=range]{width:100%;margin:0 0 8px}' +
        'input[type=text]{background:#1d1f26;color:#e9e9ee;border:1px solid #33364a;' +
        'border-radius:6px;padding:5px 7px;font-size:12px;min-width:0}' +
        'select{width:100%;background:#1d1f26;color:#e9e9ee;border:1px solid #33364a;' +
        'border-radius:6px;padding:5px;margin-bottom:6px}' +
        'button{background:#2a2c36;color:#e9e9ee;border:1px solid #3a3d4a;border-radius:6px;' +
        'padding:5px 10px;cursor:pointer;font-size:12px}button:hover{background:#343745}' +
        'button.on{background:#1f7a3d;border-color:#2a9e51}button.off{background:#7a2020;border-color:#a02a2a}' +
        /* token strip */
        '.strip{display:flex;align-items:flex-start;gap:6px;margin-bottom:10px}' +
        '.chips{display:flex;flex-wrap:wrap;gap:6px;flex:1;min-height:26px}' +
        '.chip{display:inline-flex;align-items:center;gap:6px;background:#22242c;border:1px solid #33364a;' +
        'border-radius:999px;padding:3px 10px;cursor:pointer;font-size:12px;white-space:nowrap}' +
        '.chip:hover{background:#2c2f3a;color:#9ad0ff}.chip b{color:#7f8598;font-weight:600}' +
        '.chip .x{display:none;background:none;border:0;color:#e9647a;cursor:pointer;padding:0;font-size:14px;line-height:1}' +
        'body.editing .chip .x{display:inline}' +
        '.empty{color:#565a66;font-size:12px;padding:3px 0}' +
        /* responsive cards */
        '.cards{display:grid;gap:10px;grid-template-columns:1fr}' +
        '@media (min-width:620px){.cards{grid-template-columns:1fr 1fr}}' +
        '.card{background:#1a1c22;border:1px solid #282b36;border-radius:10px;padding:10px}' +
        '.card header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}' +
        '#pad{width:100%;aspect-ratio:1;max-height:145px;background:#1d1f26;border:1px solid #33364a;' +
        'border-radius:10px;position:relative;touch-action:none;cursor:grab;margin:0 auto 6px}' +
        '#knob{position:absolute;width:32px;height:32px;border-radius:50%;background:#4a7fd0;' +
        'left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none}' +
        '.zoomrow{gap:8px;margin-bottom:6px}.zoomrow button{flex:0 0 auto;min-width:34px}' +
        '.zoomrow output{flex:1;text-align:center}' +
        'ul{list-style:none;padding:0;margin:0}' +
        'li{display:flex;align-items:center;gap:8px;padding:3px 0;border-bottom:1px solid #24262f}' +
        'li .n{flex:1;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
        'li .n:hover{color:#9ad0ff}' +
        '.hint{color:#70737f;font-size:11px;margin:6px 0}' +
        'details{margin-top:10px;background:#1a1c22;border:1px solid #282b36;border-radius:10px;padding:8px 10px}' +
        'summary{cursor:pointer;font-size:11px;text-transform:uppercase;letter-spacing:.09em;color:#8b8b98}' +
        'details[open] summary{margin-bottom:8px}' +
        '.ver{text-align:right;color:#4d515c;font-size:10px;margin-top:8px}' +
        '</style></head><body>' +

        // ── tokens: horizontal chips, edit controls on demand ──
        '<div class="strip"><div id="tokens" class="chips"></div>' +
        '<button id="btn-tok-edit" title="Add / remove tokens">&#9998;</button></div>' +
        '<div id="tok-edit" hidden>' +
        '<select id="pick"></select>' +
        '<div class="row"><button id="btn-add">Add</button>' +
        '<button id="btn-refresh">Refresh list</button></div>' +
        '<div class="hint">Click a chip (or press its number) to frame that token.</div></div>' +

        // ── card 1: camera ──
        '<div class="cards">' +
        '<section class="card"><header><h2>Camera</h2><button id="btn-enabled"></button></header>' +
        '<div id="pad"><div id="knob"></div></div>' +
        '<div class="row zoomrow"><button id="btn-zout">&minus;</button>' +
        '<output id="out-zoom"></output><button id="btn-zin">+</button></div>' +
        '<input type="range" id="sl-zoom" min="10" max="250" step="1">' +
        '<div class="hint">Pad or arrows to pan &middot; Q / A to zoom</div></section>' +

        // ── card 2: turn & views ──
        '<section class="card"><header><h2>Turn &amp; views</h2><button id="btn-turn"></button></header>' +
        '<div class="hint">Current turn: <b id="turn-label">&mdash;</b></div>' +
        '<div class="row" style="gap:6px"><select id="alias-target" style="flex:1;margin:0"></select>' +
        '<button id="btn-alias">Link</button></div>' +
        '<ul id="aliases"></ul>' +
        '<div class="row" style="gap:6px;margin-top:8px">' +
        '<input type="text" id="vw-name" placeholder="View name" style="flex:1">' +
        '<button id="btn-vsave">Save view</button></div>' +
        '<ul id="views"></ul></section>' +
        '</div>' +

        // ── everything else, folded away ──
        '<details><summary>Advanced &mdash; camera tuning</summary>' + advRows + '</details>' +
        '<div class="ver">userscript v' + SCRIPT_VERSION + '</div>' +
        '</body></html>';
    }

    function wire(w) {
      const api = window.__cameraFollow;
      if (!api) { w.document.body.innerHTML = '<p>Camera follow not ready — reload Roll20.</p>'; return; }
      const d = w.document, CFG = api.cfg;

      // ── follow toggle + sliders ──
      const btnEn = d.getElementById('btn-enabled');
      function paintEnabled() {
        btnEn.textContent = CFG.enabled ? 'ON' : 'OFF';
        btnEn.className = CFG.enabled ? 'on' : 'off';
      }
      btnEn.onclick = () => { CFG.enabled = !CFG.enabled; paintEnabled(); };
      paintEnabled();

      SLIDERS.forEach(s => {
        const el = d.getElementById('sl-' + s.key), out = d.getElementById('out-' + s.key);
        const paint = () => { out.textContent = CFG[s.key] + (s.unit ? ' ' + s.unit : ''); };
        el.value = CFG[s.key];
        el.oninput = () => { CFG[s.key] = parseFloat(el.value); paint(); };
        paint();
      });

      // ── motion: one eased loop drives pan AND zoom ──
      // Inputs (pad, arrows, Q/A, +/-) set a TARGET velocity; the actual velocity
      // chases it with an exponential ease. That gives acceleration on press and a
      // glide to a stop on release, instead of a hard on/off. It also keeps working
      // while the Roll20 window is unfocused, since it is timer-driven.
      const pad = d.getElementById('pad'), knob = d.getElementById('knob');
      const PAN_SPEED = 22;    // px per tick at full pad deflection
      const KEY_PAN = 0.15;    // arrows pan far slower than the pad, for fine framing
      const ZOOM_SPEED = 3;    // wheel-delta units per tick at full press
      const EASE = 0.16;       // how quickly actual velocity chases the target
      let tvx = 0, tvy = 0, tvz = 0;   // targets, -1..1
      let vx = 0, vy = 0, vz = 0;      // actual, eased
      let motion = null, zGuard = 0, zSeen = null;
      let anchored = false, wasAnchored = false;   // which actuator is driving
      // Pad and arrows are separate SOURCES for the same pan target. Keeping them in
      // one pair of variables meant every keypress rewrote the pad's deflection, so
      // zooming with Q while dragging the pad snapped the knob back and killed the pan.
      let padActive = false, padX = 0, padY = 0, keyX = 0, keyY = 0;

      function setKnob(x, y) {
        knob.style.left = (50 + x * 40) + '%';
        knob.style.top = (50 + y * 40) + '%';
      }
      // The pad wins while it is held; the arrows take back over when it is released.
      // The speed difference lives in the TARGET, not in a multiplier applied to the
      // eased velocity: that way handing over from pad to arrows is smoothed by the
      // ease like any other change, instead of dropping the speed 6x in one frame.
      function applyMotion() {
        if (padActive) { tvx = padX; tvy = padY; setKnob(padX, padY); }
        else { tvx = keyX * KEY_PAN; tvy = keyY * KEY_PAN; setKnob(keyX, keyY); }
      }
      function motionTick() {
        vx += (tvx - vx) * EASE;
        vy += (tvy - vy) * EASE;
        vz += (tvz - vz) * EASE;
        const px = vx * PAN_SPEED, py = vy * PAN_SPEED;
        const panning = Math.abs(px) > 0.02 || Math.abs(py) > 0.02;
        // Pan and zoom are no longer mutually exclusive. While the zoom is moving, the
        // wheel ANCHOR carries the pan as well (one actuator, so there is nothing for
        // Roll20 to discard); once it is at rest, plain scrolling takes over. The
        // handover rides on the eased velocities, which stay the single source of
        // truth, so only the actuator changes, never the speed. Two thresholds keep
        // it from flapping on the frame the boundary is crossed.
        // The handover is decided by whether the zoom can still CARRY the pan, not by
        // the zoom speed alone. As vz eases out, (1 - k) collapses and the anchor the
        // pan would need runs off to infinity; clamped, it delivers a fraction of the
        // requested movement — the pan slowed to a crawl and, on a diagonal, bent.
        // When the zoom can no longer afford the pan we hand back to scroll and drop
        // that frame's zoom step, which by then is worth a few thousandths of a point.
        const dzWanted = -vz * ZOOM_SPEED;
        const az = Math.abs(vz);
        anchored = (anchored ? az > 0.0015 : az > 0.004) &&
                   (!panning || api.panAuthority(dzWanted) >= Math.hypot(px, py));
        if (anchored) {
          if (!wasAnchored) api.releasePan();   // keep the follow loop off the scroll
          if (zSeen === null) { zSeen = api.zoomPercent(); zGuard = 0; }
          api.zoomAnchored(dzWanted, panning ? px : 0, panning ? py : 0);
          // if the wheel path ever stops working, fall back to the native steps
          if (++zGuard === 15 && api.zoomPercent() === zSeen) { api.zoomStep(vz > 0 ? 1 : -1); tvz = vz = 0; }
          paintZoom();
        } else {
          zSeen = null;
          if (panning) api.panBy(px, py);
        }
        wasAnchored = anchored;
        if (!tvx && !tvy && !tvz &&
            Math.abs(vx) < 0.003 && Math.abs(vy) < 0.003 && Math.abs(vz) < 0.003) {
          vx = vy = vz = 0; anchored = wasAnchored = false;
          w.clearInterval(motion); motion = null;
        }
      }
      function motionStart() { if (!motion) motion = w.setInterval(motionTick, 16); }

      function movePad(e) {
        const r = pad.getBoundingClientRect();
        padActive = true;
        padX = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / (r.width / 2)));
        padY = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / (r.height / 2)));
        applyMotion();
      }
      const padRelease = () => { padActive = false; padX = padY = 0; applyMotion(); };
      pad.addEventListener('pointerdown', e => { pad.setPointerCapture(e.pointerId); movePad(e); motionStart(); });
      pad.addEventListener('pointermove', e => { if (e.buttons) movePad(e); });
      pad.addEventListener('pointerup', padRelease);
      pad.addEventListener('pointercancel', padRelease);

      // ── token list ──
      function load() { try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch (e) { return []; } }
      function save(a) { try { localStorage.setItem(LS_KEY, JSON.stringify(a)); } catch (e) {} }

      const pick = d.getElementById('pick'), ul = d.getElementById('tokens');
      d.getElementById('btn-tok-edit').onclick = () => {
        const box = d.getElementById('tok-edit');
        box.hidden = !box.hidden;
        d.body.classList.toggle('editing', !box.hidden);
      };
      function refreshPick() {
        const list = api.listTokens();
        pick.innerHTML = list.map(t =>
          '<option value="' + t.id + '" data-name="' + t.name.replace(/"/g, '&quot;') + '">' +
          t.name + (t.player ? '' : ' · NPC') + '</option>').join('')
          || '<option value="">(no token on this page)</option>';
      }
      function renderList() {
        const a = load();
        ul.innerHTML = '';
        if (!a.length) {
          const e = d.createElement('span'); e.className = 'empty';
          e.textContent = 'No tokens yet — use the pencil to add some.';
          ul.appendChild(e); return;
        }
        a.forEach((t, i) => {
          const c = d.createElement('span'); c.className = 'chip'; c.title = t.name;
          c.onclick = () => api.focusToken(t.id);
          if (i < 9) { const b = d.createElement('b'); b.textContent = i + 1; c.appendChild(b); }
          c.appendChild(d.createTextNode(t.name));
          const x = d.createElement('button'); x.className = 'x'; x.textContent = '×';
          x.onclick = ev => { ev.stopPropagation(); const b = load(); b.splice(i, 1); save(b); renderList(); };
          c.appendChild(x); ul.appendChild(c);
        });
      }
      d.getElementById('btn-add').onclick = () => {
        const id = pick.value; if (!id) return;
        const name = pick.options[pick.selectedIndex].dataset.name || pick.options[pick.selectedIndex].textContent;
        const a = load();
        if (!a.some(t => t.id === id)) { a.push({ id, name }); save(a); renderList(); }
      };
      d.getElementById('btn-refresh').onclick = refreshPick;
      refreshPick(); renderList();

      // ── zoom: buttons feed the eased motion loop; slider jumps via zoomTo ──
      const outZoom = d.getElementById('out-zoom'), slZoom = d.getElementById('sl-zoom');
      let zDragging = false;
      function paintZoom() {
        const z = api.zoomPercent();
        outZoom.textContent = z == null ? '—' : z + ' %';
        if (z != null && !zDragging) slZoom.value = Math.round(z);
      }
      [['btn-zin', 1], ['btn-zout', -1]].forEach(([id, dir]) => {
        const b = d.getElementById(id);
        b.addEventListener('pointerdown', () => { tvz = dir; motionStart(); });
        b.addEventListener('pointerup', () => { tvz = 0; });
        b.addEventListener('pointerleave', () => { tvz = 0; });
      });
      slZoom.addEventListener('pointerdown', () => { zDragging = true; });
      slZoom.addEventListener('pointerup', () => { zDragging = false; });
      slZoom.addEventListener('input', () => api.zoomTo(parseFloat(slZoom.value)));
      w.setInterval(paintZoom, 500); paintZoom();

      // ── initiative auto-follow ──
      const btnTurn = d.getElementById('btn-turn');
      function paintTurn() {
        const t = window.__turnFollowCfg;
        btnTurn.textContent = !t ? 'n/a' : (t.enabled ? 'ON' : 'OFF');
        btnTurn.className = !t ? '' : (t.enabled ? 'on' : 'off');
      }
      btnTurn.onclick = () => {
        const t = window.__turnFollowCfg;
        if (t) { t.enabled = !t.enabled; paintTurn(); }
      };
      paintTurn();

      // ── viewpoints ──
      const jload = (k) => { try { return JSON.parse(localStorage.getItem(k)) || null; } catch (e) { return null; } };
      const jsave = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
      const loadViews = () => jload(LS_VIEWS) || [];
      const loadAlias = () => jload(LS_ALIAS) || {};

      const viewsUl = d.getElementById('views');
      function renderViews() {
        const a = loadViews();
        viewsUl.innerHTML = '';
        a.forEach((v, i) => {
          const li = d.createElement('li');
          const n = d.createElement('span'); n.className = 'n';
          n.textContent = v.name + (v.zoom ? ' · ' + v.zoom + '%' : '');
          n.onclick = () => api.recallView(v);
          const x = d.createElement('button'); x.textContent = '×';
          x.onclick = () => { const b = loadViews(); b.splice(i, 1); jsave(LS_VIEWS, b); renderViews(); refreshAliasTargets(); };
          li.append(n, x); viewsUl.appendChild(li);
        });
      }
      d.getElementById('btn-vsave').onclick = () => {
        const el = d.getElementById('vw-name');
        const name = (el.value || '').trim(); if (!name) { el.focus(); return; }
        const c = api.viewCentre();
        const a = loadViews();
        const v = { name, x: Math.round(c.x), y: Math.round(c.y), zoom: api.zoomPercent() };
        const i = a.findIndex(o => o.name === name);
        if (i >= 0) a[i] = v; else a.push(v);
        jsave(LS_VIEWS, a); el.value = ''; renderViews(); refreshAliasTargets();
      };

      // ── tracker links (alias: tracker row → token or viewpoint) ──
      const aliasSel = d.getElementById('alias-target'), aliasUl = d.getElementById('aliases');
      function refreshAliasTargets() {
        const views = loadViews().map(v => '<option value="view:' + v.name + '">View · ' + v.name + '</option>');
        const toks = api.listTokens().map(t =>
          '<option value="token:' + t.id + '">Token · ' + t.name + (t.player ? '' : ' · NPC') + '</option>');
        aliasSel.innerHTML = views.concat(toks).join('') || '<option value="">(nothing to link)</option>';
      }
      function renderAliases() {
        const m = loadAlias();
        aliasUl.innerHTML = '';
        Object.keys(m).forEach(k => {
          const t = m[k];
          const li = d.createElement('li');
          const n = d.createElement('span'); n.className = 'n';
          n.textContent = (m[k].label || k) + '  →  ' + (t.type === 'view' ? t.name : (t.tokenName || t.id));
          const x = d.createElement('button'); x.textContent = '×';
          x.onclick = () => { const b = loadAlias(); delete b[k]; jsave(LS_ALIAS, b); renderAliases(); };
          li.append(n, x); aliasUl.appendChild(li);
        });
      }
      d.getElementById('btn-alias').onclick = () => {
        const cur = window.__turnCurrent && window.__turnCurrent();
        if (!cur) return;
        const val = aliasSel.value; if (!val) return;
        const m = loadAlias();
        if (val.startsWith('view:')) m[cur.key] = { type: 'view', name: val.slice(5), label: cur.label };
        else {
          const id = val.slice(6);
          const t = api.listTokens().find(o => o.id === id);
          m[cur.key] = { type: 'token', id, tokenName: t ? t.name : id, label: cur.label };
        }
        jsave(LS_ALIAS, m); renderAliases();
      };

      const turnLabel = d.getElementById('turn-label');
      w.setInterval(() => {
        const cur = window.__turnCurrent && window.__turnCurrent();
        turnLabel.textContent = !cur ? '—' : (cur.label + (cur.sim ? ' · sim' : ''));
      }, 1000);

      renderViews(); refreshAliasTargets(); renderAliases();

      // ── keyboard inside the panel: arrows pan, digits frame a token ──
      // Arrows pan, Q / A zoom in / out, digits frame a saved token. All eased.
      const held = new Set();
      const norm = k => (k.length === 1 ? k.toLowerCase() : k);
      function applyKeys() {
        keyX = (held.has('ArrowRight') ? 1 : 0) - (held.has('ArrowLeft') ? 1 : 0);
        keyY = (held.has('ArrowDown') ? 1 : 0) - (held.has('ArrowUp') ? 1 : 0);
        tvz = (held.has('q') ? 1 : 0) - (held.has('a') ? 1 : 0);
        applyMotion();
      }
      // A text field, select or slider owns the keyboard while focused: otherwise
      // typing a view name would fire token shortcuts and zoom.
      const typing = el => !!el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable);
      // Cmd+Ctrl shortcuts belong to the userscript, not to the panel, so when the
      // panel holds focus they never reach the Roll20 document. Replay them there:
      // same origin, every handler listens on `document`, and none checks isTrusted.
      d.addEventListener('keydown', e => {
        if (!(e.metaKey && e.ctrlKey)) return;
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: e.key, code: e.code, bubbles: true, cancelable: true,
          metaKey: true, ctrlKey: true, shiftKey: e.shiftKey, altKey: e.altKey,
        }));
        e.preventDefault();
      });
      d.addEventListener('keydown', e => {
        if (typing(e.target)) return;
        // a modified key was just forwarded above: it is not a panel shortcut
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key >= '1' && e.key <= '9') {
          const t = load()[parseInt(e.key, 10) - 1];
          if (t) { api.focusToken(t.id); e.preventDefault(); }
          return;
        }
        const k = norm(e.key);
        if (k.startsWith('Arrow') || k === 'q' || k === 'a') {
          held.add(k); applyKeys(); motionStart(); e.preventDefault();
        }
      });
      d.addEventListener('keyup', e => { if (held.delete(norm(e.key))) applyKeys(); });
      // dropping focus into a field must not leave a key stuck down
      d.addEventListener('focusin', () => { if (held.size) { held.clear(); applyKeys(); } });

      w.addEventListener('beforeunload', () => { if (motion) w.clearInterval(motion); });
    }

    function openPanel() {
      if (win && !win.closed) { win.focus(); return; }
      win = window.open('', 'r20-control-panel', 'width=430,height=780,popup=yes');
      if (!win) { console.warn('[Roll20 Custom UI] Control panel blocked by the popup blocker.'); return; }
      win.document.write(panelHtml());
      win.document.close();
      wire(win);
      console.log('[Roll20 Custom UI] Control panel opened.');
    }

    document.addEventListener('keydown', e => {
      if (e.metaKey && e.ctrlKey && e.key === '0') { e.preventDefault(); openPanel(); }
    });
    window.__openControlPanel = openPanel;
    console.log('[Roll20 Custom UI] Control panel ready (open: Cmd+Ctrl+0).');
  }

  initControlPanel();

  // ── TURN-ORDER AUTO-FOLLOW ─────────────────────────────────────────────────
  // Frames whoever's turn it is. Debounced, so a GM stepping the tracker quickly
  // (e.g. to recover a skipped turn) produces ONE camera move, at the end.
  // Runtime tuning: window.__turnFollowCfg
  function initTurnFollow() {
    if (!window.Campaign || typeof window.Campaign.on !== 'function' || !window.__cameraFollow) {
      setTimeout(initTurnFollow, 500); return;
    }
    const TURN = { enabled: true, debounceMs: 1200 };
    window.__turnFollowCfg = TURN;
    let timer = null, lastId = null;

    // The current tracker row, as {key, label, isToken}. Custom group rows (no
    // token) get a 'custom:<label>' key so they can still be linked to a viewpoint.
    function entryAt(i) {
      let list = [];
      try { list = JSON.parse(window.Campaign.get('turnorder') || '[]'); } catch (e) { return null; }
      const e0 = list[i];
      if (!e0) return null;
      const isToken = !!(e0.id && e0.id !== '-1');
      let label = (e0.custom || '').trim();
      if (isToken) {
        try {
          const g = window.Campaign.activePage().thegraphics.get(e0.id);
          label = (g && g.get('name')) || e0.id;
        } catch (e) { label = e0.id; }
      }
      return { key: isToken ? e0.id : 'custom:' + label, label: label || '(unnamed)', isToken, entry: e0 };
    }
    // A dry run cannot write turnorder (it is synced to the server and to everyone
    // else at the table), so the panel would keep reporting the REAL current turn
    // while the camera acted on the simulated one. This override makes the whole
    // chain — label, alias button, camera — agree during a simulation. It clears
    // itself the moment the tracker really moves, so it can never outlive the test.
    let simulated = null;
    const currentEntry = () => simulated || entryAt(0);
    window.__turnCurrent = currentEntry;

    function apply(override) {
      if (!TURN.enabled) return;
      const cur = override || currentEntry();
      if (!cur) return;
      if (cur.key === lastId) return;                 // top entry unchanged
      lastId = cur.key;

      // an explicit link always wins — this is what makes NPC group rows work
      let alias = null;
      try { alias = (JSON.parse(localStorage.getItem('r20custom.panel.aliases')) || {})[cur.key]; } catch (e) {}
      if (alias) {
        if (alias.type === 'view') {
          let v = null;
          try { v = (JSON.parse(localStorage.getItem('r20custom.panel.views')) || []).find(o => o.name === alias.name); } catch (e) {}
          if (v) { window.__cameraFollow.recallView(v); return; }
        } else if (alias.type === 'token') {
          if (window.__cameraFollow.focusToken(alias.id)) return;
        }
      }

      if (!cur.isToken) return;                       // custom row with no link: leave the camera alone
      try {
        if (cur.entry._pageid && cur.entry._pageid !== window.Campaign.activePage().id) return;
      } catch (e) {}
      if (!window.__cameraFollow.focusToken(cur.entry.id)) {
        console.log('[Roll20 Custom UI] turn token not rendered here:', cur.entry.id);
      }
    }

    // Debounced scheduling — shared by the real tracker event and by the simulator,
    // so a dry run exercises exactly the same path as a live turn change.
    function schedule(override) {
      clearTimeout(timer);
      timer = setTimeout(() => apply(override), TURN.debounceMs);
    }

    window.Campaign.on('change:turnorder', () => { simulated = null; schedule(null); });
    window.__turnFollowApply = apply;

    // DRY RUN: pretend the tracker advanced to entry #i of the REAL turn order.
    // Read-only — never writes Campaign, so nothing is synced to the server or to
    // the other players. Returns the row it will act on (after the debounce).
    window.__turnSimulate = (i) => {
      if (i == null) { simulated = null; console.log('[Roll20 Custom UI] simulation cleared'); return null; }
      const e = entryAt(i);
      if (!e) { console.warn('[Roll20 Custom UI] no turn-order entry #' + i); return null; }
      console.log('[Roll20 Custom UI] simulate turn #' + i + ' → ' + e.label +
                  (e.isToken ? '' : ' (custom row)'));
      e.sim = true;
      simulated = e;
      schedule(e);
      return e;
    };
    window.__turnList = () => {
      const out = [];
      for (let i = 0; ; i++) { const e = entryAt(i); if (!e) break; out.push({ i, label: e.label, isToken: e.isToken, key: e.key }); }
      return out;
    };
    window.__turnResetGuard = () => { lastId = null; };
    console.log('[Roll20 Custom UI] Turn-order auto-follow ready (debounce ' + TURN.debounceMs + 'ms).');
  }
  initTurnFollow();

})();
