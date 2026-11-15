from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public/downloads/sentinelot-product-brief.pdf'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont('Body', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
W, H = 595.28, 841.89
INK, TEAL, LIME, MUTED, SAGE, LINE = [HexColor(x) for x in ['#182d32','#123e40','#9bbd17','#5a6868','#eef2ec','#dce3df']]
c = canvas.Canvas(str(OUTPUT), pagesize=(W,H), pageCompression=1)
c.setTitle('SentinelOT - Product brief')
c.setAuthor('SentinelOT | FAST NUCES Islamabad')
c.setSubject('Research prototype: offline-first industrial network visibility')

def rect(x, top, w, h, color):
    c.setFillColor(color)
    c.rect(x,H-top-h,w,h,stroke=0,fill=1)

def text(x, top, value, size=10, font='Body', color=INK):
    c.setFillColor(color); c.setFont(font,size)
    c.drawString(x,H-top-size,value)

def para(x, top, value, width=507, size=9.5, color=MUTED, leading=15):
    style = ParagraphStyle('p', fontName='Body', fontSize=size, leading=leading, textColor=color)
    p=Paragraph(value,style)
    _, height=p.wrap(width,H)
    p.drawOn(c,x,H-top-height)
    return height

def rule(top):
    c.setStrokeColor(LINE); c.setLineWidth(.7)
    c.line(44,H-top,W-44,H-top)

def logo():
    c.saveState(); c.translate(44,H-68); c.scale(.1,.1)
    for pts in [
        [(45,135),(45,225),(100,290),(515,290),(480,235),(365,235),(365,185),(307,185),(307,235),(125,235),(100,205),(290,205),(255,150),(45,150)],
        [(0,0),(53,57),(153,57),(225,128),(282,128),(282,0),(225,0),(225,70),(178,23),(155,0)]
    ]:
        p=c.beginPath(); p.moveTo(*pts[0])
        for v in pts[1:]: p.lineTo(*v)
        p.close();c.setFillColor(INK);c.drawPath(p,stroke=0,fill=1)
    p=c.beginPath();p.moveTo(42,84)
    for v in [(185,84),(240,137),(389,137),(389,161),(220,161),(165,108),(65,108)]:p.lineTo(*v)
    p.close();c.setFillColor(LIME);c.drawPath(p,stroke=0,fill=1)
    c.setStrokeColor(LIME);c.setLineWidth(21);c.circle(419,150,27,stroke=1,fill=0)
    c.restoreState()
    text(107,39,'Sentinel',22,'Bold')
    text(107+pdfmetrics.stringWidth('Sentinel','Bold',22),39,'OT',22,'Bold',HexColor('#778f08'))

def page_header(number):
    logo(); text(435,45,'PRODUCT BRIEF',8,'Bold',MUTED)
    rule(85)
    rule(791)
    text(44,805,'RESEARCH PROTOTYPE  /  FAST NUCES ISLAMABAD',7,'Body',MUTED)
    text(472,805,f'NOV 2026  /  {number:02d}',7,'Body',MUTED)

page_header(1)
text(44,110,'See what’s happening',30,'Bold')
text(44,150,'in your industrial network.',30,'Bold')
para(44,203,'Offline-first OT monitoring. Local data. Explainable alerts.',size=11,color=TEAL)
para(44,237,'SentinelOT is an OT/ICS monitoring research prototype for small industrial environments. It turns copied network traffic into observed assets, protocol events and evidence an operator can inspect locally.',size=10,leading=16)
rect(44,294,507,310,SAGE)
image=ImageReader(str(ROOT/'public/media/asset-inventory-current.jpg'))
iw,ih=image.getSize()
c.drawImage(image,54,H-306-487*ih/iw,width=487,height=487*ih/iw,mask='auto')
text(54,586,'Captured 15 Nov 2026 / Retained lab data / Data Stale status preserved',7,color=MUTED)
text(44,620,'A local workflow for industrial visibility.',18,'Bold')
rows=[
('01','Passive monitoring','Inspect copied HMI and PLC traffic without sitting inline.'),
('02','Asset discovery','See observed endpoints, protocols and inferred roles.'),
('03','Explainable detection','Trace configured rule matches to supporting event context.'),
('04','Offline vulnerability matching','Compare reviewed identities with locally imported intelligence.')
]
for i,(n,title,body) in enumerate(rows):
    y=654+i*30
    text(44,y,n,8,'Body',MUTED);text(72,y,title,10,'Bold')
    text(72,y+16,body,8.5,color=MUTED)
c.showPage()
page_header(2)
text(44,111,'Evidence first. A clear path forward.',23,'Bold')
para(44,151,'The current end-to-end proof of concept runs in an isolated virtual lab. Public capture validation exercises selected parser and rule paths; it does not establish production readiness or field detection effectiveness.',size=9.5,leading=15)
text(44,218,'HOW IT WORKS',8,'Bold',TEAL)
rect(44,242,507,79,SAGE)
text(57,255,'HMI / PLC traffic → mirror port or TAP → capture interface',10,'Bold')
text(57,279,'Zeek logs → normalization, discovery and detection → local evidence',8.5)
text(57,300,'Planned physical installation. Management uses a separate designated path.',7.5,color=MUTED)
text(44,345,'Protocol scope',14,'Bold')
para(44,371,'Modbus TCP, Siemens S7comm, DNP3 and EtherNet/IP/CIP. Coverage is bounded by the installed analyzers, decoded fields, configured rules and observed traffic. S7comm Plus and comprehensive operation coverage are not claimed.',size=9,leading=14)
text(44,433,'Current evidence & next steps',14,'Bold')
para(44,459,'The prototype provides passive capture, discovery, configurable detection and local vulnerability matching. Matching requires reviewed device identity, firmware and product mappings; missing inputs remain unknown. Automated tests verify defined inputs, rather than plant-wide accuracy or false-positive rates.',size=9,leading=14)
para(44,531,'Roadmap: real SPAN/TAP validation; Raspberry Pi deployment and capture performance; longer benign baselines; deployment authentication/TLS validation; and machine-learning anomaly research. The hardware model is illustrative. Water treatment, hydropower, utilities and manufacturing are intended applications, not customer deployments.',size=9,leading=14)
rule(612)
text(44,631,'Talk to the team',17,'Bold')
people=[
('Muhammad Abdullah','Project Lead & OT Security','i232064@isb.nu.edu.pk','Primary contact'),
('Usman Khan','Platform & Dashboard Development','i232069@isb.nu.edu.pk','Primary contact'),
('Momin Amin','Industrial Lab & Integration','i232081@isb.nu.edu.pk','Additional contact')
]
for i,(name,role,email,label) in enumerate(people):
    y=666+i*37
    text(44,y,name,9,'Bold')
    text(44,y+15,role,7.5,color=MUTED)
    text(343,y,email,8.5,color=TEAL)
    text(343,y+15,label,7,color=MUTED)
    c.linkURL('mailto:'+email,(343,H-y-12,550,H-y+1),relative=0,thickness=0)
c.save()
print(OUTPUT)
