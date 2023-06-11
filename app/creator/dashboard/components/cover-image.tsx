import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

type Props = {};

const CoverImage = (props: Props) => {
  return (
    <AspectRatio ratio={16 / 4}>
      <Image
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUZGBgYGhoZGhoYGhkYGhwYHBoaGhgaHBocIS4lHB4rIRgcJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzYrJCs0NDE1NDY0NDQ0NDE0NjQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NP/AABEIAHABwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEAwUGAwcDAwUAAAABAAIRAyEEEjFBUWFxBSKBkaETMrHB0fAGFFIHQmJyouHxFSMzgrPCJFNzkrL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAsEQACAgICAgEDAgYDAAAAAAAAAQIRAyESMQRBURMiYTKBUnGRocHxFCNC/9oADAMBAAIRAxEAPwDE/EfaBr1mVSAHOptkC4DpdIWMHXvI6XT8SYIUJdK39ER6R3H7K6uXEVxrNNp8nx/5LmvZg1an/wAlSJ/nO/FP/DHaTsPUc8aODQ7iGh7Xkjn3VWwDHvJI1JJ+Z+KzkEF9zJH0PfFhlGbSLgSPUL3h4HD4LwzGlwD4ggMIcRewBi8C9+a9zFUFQyM9aKmPwjKrHU6jczXCCDMcj1BuDsQvCKbXMLmFoLmktcTOoMGL8QvoQObxXhHb9LLi8S3hWqEeL3H5qosnAqb2dr+zup/yN4taY6Ej/wAl268y/Z3iCMUGTZ9N9iNxldYjk0r1A0zwR0cvlRf1LoYhOLDwSJ2cvFnjPbYccVXMG9aoAYMWeQPQLrP2fz7WuHe8GU75i6RmqRYjurj8eQ/E1XZherUdcwYL3ea7P9nzRnru4tpifF6qT3R6WXWF/sduhACWFJ5yEQhCAFBThUKYhKhqTXQ/PyQXDgmIRRXNj3PKnpPkKqnMfGiTRUZ72W011UBV3PJTEqNHk+C2cSFHlDrhQwpaToCOug5OWpEzKY8072AUba4CU4kKdmqUa2VnpsKYNaTZK2mqsx4uyCE4MVjI07p4pjiixrE2VvYmJTC1aAAiE2pSBFkrLeHWijCCw8FM2iRu1TMAAu5pTshYm+ykhWyGzqFG9rR0RYPE/kgQpHBp/ejwTco4j1+iLJcGhqEsDiPX6II5piaYkJYQBzRCBiJcp4JEoKAXewyngmvdAny6p4cq+JqtDhI2tw1KFtmsIqUi2wyecCfJI8qChVvob8/7fcqV5BOiGtlZIqLEzJEpPJIkZMEiVCZm0IhKhAUeC4kKrkurNd11XefNbej049FjCiM3L+6sYOqxoDQ5wJF4Pzj4KJjMrSdyHen+U/Bvhs90Rvlk/ELOQ1+pmhi3MGHe1hJhpmdZK9jYbDoF4piq5dSJJEObAsW+67hmPFek/hXtX2gDHOlwYXO6+0IaP/rCyviZeRG0mdOxw4LxP8Vn/wBdiY/9x3yXsOGrZmBw59YBIXkX4upluNrzaXhw5hzWkFVjknte0RgtNjOxO1hhqrKkTke0uMCckw+CLnuly93c0f4Xzk77vHxXsn4T7eFRmHa5wl2GBcTbv0ntpv8AMvb6JyRrlS1Z0VSRx81A52524q2XjiqHbFYsoVngZslN7gObWOIFuiSZySgmeBZ85Lj+9fzv813/AOy+pL8SNO7RP/dBXBYYQAu5/Zb3sRXboDSabb5XAA/1HzW8tKzfJHlBo9JYEpClNJMLVz2c3ClTIyxGRSQkhPkT9OJEWoIUwCjemmTLGkrGIQhUZoEIQgewSgpEKSkqHeKTxSIRRfII5ohCRIdihCEJksEocQkQgEBcUiVCAsSEqEIGFkFCEh2CEJExCoQhAAhIgFIpRI6syyP1X6ZXKRZmJxOWoIMtLhNiIc0AEBx7sGRbYnmnu7UYWgtJnMAWkQQBd0+HxTu6RX05VZpNbKgc6XNI2B8N59VMH2P3soMG+/gseb50dcMSji5e6FY9z3k6DhHJFDEB9ogqeIPifKbeiyGPyvDeJI8gT8ijJNqWui1ijkh/k1kKFtZp3UgcDoVopJ9HDKEo9ochIhMzoVCRCAo8Aad1M3KYt6En6BVmlOatn0eliVxLdap7w4Nd8lFQfawnlKjdo48vmJUVF8EEKK0Pplms+WNbplz/ANRkLr/w1iXMexzTGZt+lnR5gLi3yT8ltYWuWhuXVunhf6LLLFyjSIy+jvML2s1tgYgOsRrcac5+K4j8Z4pr8RLSDlYxs77ug8YBCUY4h0nYn1WNiqmd5cdSpwYXGVt6oiLroqvC0ex+0zSm8HLlYToCa1CpJ5RTd5qrVpkC2sqs5sLpdJlTXJaPesPjmFmdrwWCwIM6d3bnIUuKfmZUZMyx7T4tv/8AoLyn8PdqFzWUGyGsBzuA5k5Rw1u476XWnjfxaaDDTYM9V5JL3WawGdGjUwBqR46Lh+rkc3FL/RhHFurOJwzCWiBNrLqvwB2i3D4iq51h7GBzca1JrR5vXMUS0RLZAiLkRGhsnYjEOa4ZXggxAAAPvAgEDm0HwC75X0dDWtH0M/ENvBuoBUBm+h+QPzXnf4Y/ET8+WqZc8tEmIAY0yTzNz9AuqwXaLcr3utLi4A6wYDBHGB4LkyZIwaTfZzS5Xs3JSgrLpY0ZWudYuMNG54npM+Q4q4XRunGcZK0zNssZkW/SFBmRmKugsc5nCPh8UmQ8PmgPKM3JVZm4rtBkPA+SQsPA+SdISh8aFFjUURoUhqTqfgkNXp5BIqkMhCeaiQVOSA4oahOLwkbCAoRCc5nBKKfFFhQxCcWc0ZOYRYuI1CWBx9EWQHERCEICgQhCYqBQYh4BbJjvDW2x3U6wcbVzvkAjLl96AC3M4EtOvG1wd0ro0x4+To3kKn2bWa5kNdmy20AIEmAQLaWtaytOCV6sTjUuLAqJ7srXOI0BOvopmMKrY7FNYxxmTG1wNpKhv5Z1QTukrXyc9UYHvLg3L/uHPmDsto7okXcZk9VYw7KLnkFxH8IgTGpvoPkoMTiHHM9/euA5zOJb3TbcZyIA2G4uj3ggREG4vNxA13kKbfZ1Rj6Z0Wc5TlAa0DqTaBfdRYF944BK4RSjkB6qvTflk8G/JZRf3fuXONwa/BrP26D4Lmu2qkE5HAua8OABE7z6FWcfi3uY1pNnsvz7zhHL3VAzDsGjQry6ZHjxajTLFDFUnua3IcxsXDu9NDJV52DI915/6gHfQrAqwHQOB+H911DHSAeICqCUlsx8jljacX3f5KsVW7B3Qx6O+qT84R77S3qCPUSFdRm5q+Pwzn+rf6op/wBir+ebxHmEKbKzg30Spb+QvH/Cz5+aVKxV2OVgFdLOnF+kQmQ7mCPMKNhgp6gz/OEkOWmXmvGyuYZ3enbQfP1+CyqNMndaVKQOaVdozyO2PNyT97pgYAntcJQXDcFO6IpjWskDp6qGrhJ1sNzurrDKgrgx4qe2NdkX5gsGVhyAeCpElzheSbK1iKR2HDzIH1UmFwd8zrRBHxRpbLXWjPLiLbrb7G7OzEE+9qCducbn4eCBhWzmiTJN+Jg/JWjUMAC1oPSfvzKnJKUo1EXqjawGEpB7cjc72Xc+TAMERP75gnktshcrhu0SwAMY0HdxJc7nGwV1/ar3kCcjd8t3ffkvJz+POUrfX5Zm4tm/RqZXB2sGfEaKw3Fuc9pebNIPIczGqz24qk1oGcafvOl3jzTsPiA+co7otmO55chxXKvqQWuuzNxOgw+KNR3dENG5+PU+l1flZfZWIFmBsDUknU8AONvILUXs+NLlDk3b9nPK09AhIhdDGr9ioSISGKkQhAAhCEDBCEIAEIQgAQhCABCEIAjcXzaI5ymVsSGC9zwHzOg8VOmPc2QHRcwJ3PAIQ+S9oyD2u86AeV/ireCxL3m4gc2kDwKvgRoocZim02F7vAbk7AJqVIp1NpRWx1Spl2JsTYE6ceCxMQxznQSHQ8iTduYuPdj9wOa5tr+7uZUGG7QeazCXkB4BcNW3EmBt4cFbrOLHPa1zcroyh4IaYFgHSMpGgB2hZOSdHXDBKF7RcwFNweYGVoGUgkWiCOo7xg8JV11Zos0Zjy0VLBsL++9xNg0TAsLmSNbk35K4HNG4H1SSbXwicjjF9W/7DXNc73jA/SNFU7UYAyQLXB6EEA+DoVurXDco/UYHDUT8U97A5pB0cI8Cr4JLRl9WXJN9fBzlZxNLOx4zd1r2kC8D3hwOWb724KtRLS5obHeIkbi+pG2/kkq0x7sQ4SA4Cxj7lJSq5X5zHchzuk5Z8BdS5VGjvjC25I6Z5lkLLxmIyMc7jAvwJglX3ulkg2JCye1x/tu6t66rCPZq+iB1cuLQTYAgC2kk/EnzV4OCxsMxzXAu0hXqdSbg2J+FvknJX2StdEOIMPZv3h43Erpx2OJ97u8Iv01XPMxr2PGTLmcD3nAmANd4Vj/VcQXAOeyDs1kbc5USc/8Ay6FKHI6D8pSYIIzfzG/oE9mJaLBsdD/ZZlDEsa0GtXYwnYuYD5yfkrH+pYYRlqMdP6ajHHxl0rCSk+7Zlxaei5+d/h9Uqg/NUeI9fohZ8fwFSPnug2ytspEgnYepOip0XWHP7H3zWpRxWjQBtfmvcbMFk4qkRHCPjS6rNwjht/jgtT842JB++PS6awlxJJsdBceqSbF9RsSjh8sch/UdVYbS809oTgk2S5NkRoRzO5+Q4JhpqwQlDJSsdsiYdkPaFLkje6hcgQ1zR6yns4psKVhCGNDmpUhckzKKZVkjCpc4VcvhPa+dipkrCy1ReAZLcw4TA8Y2WnT7RqP7rGsaNtAB0zEBZdItBHtMzGnSAC4jkCR56LWw78AW941g7aYJPTKIn7krmyQT21ZNJmtharmgOc9gI3Dw6/MwAFqUO0XAgvMtjUC+ltFlYHD0MuZntGmLF7S09O6b/BSNZC4HOWKX2v8Ab0RKKN7DVi8zo0aDcnj0+9laWAyu5ogOIHKy0MFjGnukku8fiSfOy78HlKf2y7+TKUaL6EIXaSCEIQAIQhAAhCEACEIQAIUVarl21QzEAiSQDw0QOmSgoVFuJgkxrzUjcZy9UrBwZaWb2piqYLGPaHCoS3X3YAOa1+GkapK/aVMENe/L0a4zuNOhXLdr4vNUY8NygTAmbAblS8lPXZ1YfElJcpLR3THgjMSA3YzrxgLH/EFVr2tY03zbkA+Syuye1b5H6ONjIAbrMztZSdq4ovawPaCzMYOoI0iNNRwUNtrbOjFiUJ0l17ZCcSxmUGowRY94EmBAs2SpH4lzmloLiDksdp1N9LCdll0cWGPa0NDYEyIEglsDS0SfNWBijLi1gN2yc9iSLXDZIgcAqbUnt0q9Gqi0urf5NDE4juNBdN3RfmYttsqDKkkjgbc1Tr1XFubu5ZI7oMAz+o3ukovJpEgw6+U84UyX+C8dK/5m4zFtaBIvf4bXtxTaXajmsDGsYAbHKSAbQTfosLDYl7mhxMwY0i8X+Knc85gB9lDnKqQvoQctr8l/EuJuDbMNNrfSPVVsQ4Ay490DM8CBmDXCGydiYUWIfDIJg2+QA+CpveXPEklsgHhe8HxSat2XHR0PYmMljmOd3mhrsvAEGSPSR9VjPeSTO9/uE3tQQSWkh3Fpg6cuU+az2VXRBN0RV7CSq0bNepLQn4euQ0DYLELtFeovhoHJDQq0Pe6agPIqR2o8fgjCYYvdmDmNDRHfdEzwtyS4luVwGZjtfccHbKbV0Un6KPaWrfH5KkrmJOZ0cAqz2wVa6Gxuc8T5lCXKhMDjqWieCr7ME2IcAOjj80n5Ro4/0/VdNnjUym2RtPVX8NibQ7zTnMZEC3j/AJVZzEB0XfzQ2UtJxdrptz5rMawq9Rp2APxP1UtDLcolDGE2aCel9dFZqYNzWtkHM4OdHBrfnYnyUOSTpjKrim5kZ0isYISQruF7Ne8ZgIbpmJAuTAAnUkpSkoq2BTVmjhHOaXAWEDqeX3uOK2Wdg9wTZ9id/wBVvUeS0mYNoY1l4Gv8W5nqVw5fNjHUfkTdGFQ7LJuWyNhoXu6/usHH6rUwPZDWXdDn/wBLegOvUrSA++SCVwT8rJPV0ibZn4nsxryAernb+e59B5KWj2ZSbcN8zorGUp+WdVDyzrjehgCBp6KNzyVYbSSspwoUkvQIquJ3laXZdOmBnfBdsCJAjluVC5sppp81pHM4O0kEtqjXf2i2RAkbn6BTUsW0jW/gOuuw4rByFIQ5arzsidsjgjo212nQzzGn9/BDKwc6G3jU8OA6rAbUOXLMTrxPDwVrDYwMtFuWpPMrePncmlLXyJxNpCpUO0WOsZb/ADaef1TsV2jTYJJLuAYC8nwbp4wF3RzQkrTRKi26SLaqV+0qTHFr6jWuGoJuLT81x4/FFXK4EkuMZXdxuWDJsG96dLrIxuLdVeXvMuOptewA0A2CbkdkPClf3PX4O5q/iSiCQ0udG4AI9TKtDHZ2gttmAIN5grzenUyq5SxdtSI4EpOTN34cfTOqxVc2gx92S4Zr3z/uBg/U4tt4EyVg4HES4y4m25J3Vx1ULKTk+jRYYxVdnR0cLTdIbXa47kQfg5Uu16XsgHNfIvMa2E8SsLMOITXEd+P0H5rHlN+zoh4kIyUuxMbXJAdOYyI4wQSLfeqirgPa5xaZa0xr7xmetlDiqrWezcTBy2MTsPqoH9pQzuuG+0m+/XdaxjpMvJJp8V0KyoMlrHNEX2lTMxznMZTIGVhMRMmSTe/NUGMcWO7zswAePFxDrRwIVfDPqB1mlzQYNtzfUBXSZC0v6lzEVx7UE27o4fq59FEzF33i8R6ehPmpxhy9r2lhDhDmmJni2eh05eChHZ9WwDC0Cd7eiE0FE2Gx/ceyNSw6694bK5ReMjwLXOmn7s/FZjcI5sgxoN/0kGPRWMI8+zdP6vhCqVNaIiqbf5K2GrEBzeDirlGpIknf+6q4ctY573jNN4A4k7H6q/hWMeTLwwOuBBJuBYBtvVS9IpNXbM2tiS6LzefvyQyq4Ob3jAdOp3ar2J7OosAy15dN5Y8AgbABpg+Kq1qOUgzJ1FpGkDVawaabXwZSq0n2R4k1Gxme4zEZpNj1TXkg+iZisY9+UvMkGRaNNU6cwBUmiJHvDS0kSJEjiFfdWa+7W5QOnyWZiv3f5gr1Gt7O+WTfWymSEQ1nSjCnvDx+CmxLy8h0AW0CqDMNh4yj0UWn++fBMeySrNOowsAtmi/XdU8UYhKyi1kCFn+1QihGA1nJaeC7Je8SGwI146WHgZVeFaZiKpGVrnQIEAx00XTJSr7WeOkNrYA08oe4BzhmyxOUHSb66qs+lzWtR7Me9geZzOdeZnLpvvv0VrB9jObDnOvyHXc/FZ/UjFbeyqMTD4QudAmf7E/JbeB7H78P0EjqZ+i0MJggwkklxMSXX00++Su5g2SSBv4LmzeRLqIcaGYHBtpMgC+pPErCx3aozvIEnKaYnQD9485UfaPbb3ktYcrbiRq4bdBCx1WDx5W5ZO2Idm4JCVawOAfUPdHjt4ldLguxKbB3gHu4nQdAts3kwxae38AcszDmMxFvpH1WhhO0nsLADAaSZAveAfQeRPFdJiMGx7cpFuVoVP8A0RnPzE9Fy/8ALhNfchWOwXaIc7KXAiB3jAl2lh4E+KuVcWxoJJsBPPWPvqqH+hs59JKmZ2QyQSM38xJ+a4pxwt2m/wCgqJqmKtABB5pfzNukJxwjf8D6b6qrUaAJHe5DXoeHipjGD0gotOxIAHmnsxAAzHcwB8SVRg7hSU6BdoCj6cUBf/Nt4p7aqy/yrw7l4K41sbeZlZzjFdBZazhGccVXl3Aef9kDNvCzpisnzpPaBQOLuEprsxi2nRCTCyfOglRjMRBdYaCZCe1vRJoQ4JleiHiDPgS0+ikazmn5AmrTtFK1tGO3sRkyXuI4QATyn+yo4js6qSXZBGwaRYbALpvZpMi6I+Vki7ezaOeadvZylTAPaBLHEnYAmBtJFp5JrcG8/uHxgfFdUbIiVrHzn7RpHy37RgYfC1Ab+rgVPUoPgy5o5krQrdnMeZIcP5XvYP6XBY1X8Kkv/wCdxZ/EC545TMHr6LaPlQl26/Y2j5EH+BZY2zq9MeMn4pjsTQGteZ1yNTsR+G2MbIc9ztrAjxuA0cyVlOpBtiBPp57rWDjPcWbRzclpl2pisMQA72jwNB7vzUQxtFvuYUn+eofqU2pRLdWxYOIjQHSeG3monUnBocQQHTHODdaJL5K5F5nbDpH+zTaBsCZjhOkcoUNXtKu6xqNZNgGsbHSSJ9VBSw7nBzmiQyC7oTCf7AuEBpI6WTSiCdiD2096o+ZtLsg0O5smVqZmXuzE/wAYf8CQpaLX09XsDP0vOaOgbJ8EoqMe6GMe48i1jfN9/RFpegZlYzChpzNEQASNdQLiefxWtgf+L/q+iixjoB7jLD+fQWknu7cE7DVwWnN702taOQ0G6b30JIZiTfwSse4N7ri06SOEaJtcyUxhTCiVr3mznEgaA7TqreMPfb0VGm7vH72Vis6S3orX6X+xk1/2Rf8AMqlgcWgzF9NdgrBLGiwPiVBo4DkfikruEeKXZqx+J1b1VnE8PFVcTqzqpsW/vgch8SkSTUqoAATi1Z76l1psFh4KZKi4jKDjoBxUGOOiWh3pgxBhQY13eA4D5oS2NvRDKE2UK6Js/9k="
        alt="Cover"
        fill={true}
        quality={100}
      />
    </AspectRatio>
  );
};

export default CoverImage;
